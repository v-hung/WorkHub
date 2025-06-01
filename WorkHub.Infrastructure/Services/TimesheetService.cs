using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.ObjectPool;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services
{
	public class TimesheetService : ITimesheetService
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer<TimesheetService> _localizer;

		public TimesheetService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<TimesheetService> localizer)
		{
			_context = context;
			_mapper = mapper;
			_localizer = localizer;
		}

		public async Task<TimesheetDto> PerformCheckIn(string userId)
		{
			Timesheet? timesheetDb = _context.Timesheets.FirstOrDefault(t => t.UserId == new Guid(userId) && t.Date.Date == DateTime.Today);

			if (timesheetDb != null)
			{
				if (timesheetDb.StartTime != null)
				{
					timesheetDb.StartTime = DateTime.UtcNow;
					await _context.SaveChangesAsync();
				}

				return _mapper.Map<TimesheetDto>(timesheetDb);

				// Bỏ kiểm tra chấm công thủ công để ưu tiên ghi nhận tự động từ thiết bị sinh trắc học
				// throw new BusinessException(HttpStatusCode.BadRequest, _localizer["CheckInAlreadyPerformed"]);
			}

			Timesheet timesheet = new Timesheet
			{
				UserId = new Guid(userId),
				Date = DateTime.UtcNow.Date,
				StartTime = DateTime.UtcNow,
			};

			_context.Timesheets.Add(timesheet);
			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);

		}

		public async Task<TimesheetDto> PerformCheckOut(string userId)
		{
			Timesheet timesheet = _context.Timesheets.Include(t => t.User).FirstOrDefault(t => t.UserId == new Guid(userId) && t.Date.Date == DateTime.Today) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound"]);

			if (timesheet.StartTime == null)
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["CheckInNotPerformed"]);
			}

			if (timesheet.EndTime != null)
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["Checked out"]);
			}

			timesheet.EndTime = DateTime.UtcNow;
			timesheet.IsActive = false;
			timesheet.WorkedMinutes = await GetWorkedMinutesAsync(timesheet);

			_context.Timesheets.Update(timesheet);

			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);

		}

		public async Task<TimesheetDto?> RecalculateWorkedMinutes(string userId, DateTime date)
		{
			if (!Guid.TryParse(userId, out Guid userGuid))
				throw new BusinessException(HttpStatusCode.BadRequest, "Invalid user ID format.");

			var timesheet = await _context.Timesheets
				.Include(t => t.User)
				.ThenInclude(u => u != null ? u.WorkTime : null)
				.FirstOrDefaultAsync(t => t.UserId == userGuid && t.Date == date.Date)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound"]);

			if (timesheet.StartTime == null || timesheet.EndTime == null)
				return null;

			timesheet.WorkedMinutes = await GetWorkedMinutesAsync(timesheet);

			_context.Timesheets.Update(timesheet);
			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);
		}

		private async Task<int> GetWorkedMinutesAsync(Timesheet timesheet)
		{
			if (timesheet.StartTime == null || timesheet.EndTime == null)
				return 0;

			var workTime = timesheet.User?.WorkTime
				?? await _context.Users
					.Where(u => u.Id == timesheet.UserId)
					.Select(u => u.WorkTime)
					.FirstOrDefaultAsync() ?? new WorkTime();

			var requests = await _context.Requests
				.Where(r => r.TimesheetId == timesheet.Id && r.Status == RequestStatus.APPROVED)
				.ToListAsync();

			return CalculateWorkedMinutes(timesheet, requests, workTime);
		}

		private int CalculateWorkedMinutes(Timesheet timesheet, List<Request> requests, WorkTime workTime)
		{
			int actualWorkMinutes = (int)TimesheetUtils.CalculateWorkTime(timesheet.StartTime!.Value, timesheet.EndTime!.Value, workTime).TotalMinutes;

			int leaveMinutes = requests.Where(r => r.RequestType == RequestType.LEAVE_REQUEST).Sum(r => r.DurationMinutes);
			int adjustmentMinutes = requests.Where(r => r.RequestType == RequestType.TIMESHEET_ADJUSTMENT_REQUEST).Sum(r => r.DurationMinutes);
			int workedMinutes = (adjustmentMinutes != 0 ? adjustmentMinutes : actualWorkMinutes) - leaveMinutes;
			return Math.Max(0, workedMinutes);
		}
	}
}