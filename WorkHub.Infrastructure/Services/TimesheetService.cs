using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Time;
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
			timesheet.WorkedMinutes = CalculateWorked(userId, timesheet.StartTime!.Value, timesheet.EndTime.Value);

			_context.Timesheets.Update(timesheet);

			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);

		}

		public async Task<TimesheetDto> RecalculateWorkedMinutes(string userId, DateTime date)
		{
			Timesheet timesheet = _context.Timesheets.Include(t => t.User).FirstOrDefault(t => t.UserId == new Guid(userId) && t.Date == date.Date) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound"]);

			if (timesheet.StartTime == null || timesheet.EndTime == null)
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["CheckInOrCheckOutNotPerformed"]);
			}

			timesheet.WorkedMinutes = CalculateWorked(userId, timesheet.StartTime.Value, timesheet.EndTime.Value);

			_context.Timesheets.Update(timesheet);
			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);
		}

		private int CalculateWorked(string userId, DateTime startTime, DateTime endTime)
		{
			WorkTime workTime = _context.WorkTimes.FirstOrDefault(w => w.Users.Any(u => u.Id == new Guid(userId))) ?? new WorkTime();

			TimeSpan workedHours = TimesheetUtils.CalculateWorkTime(startTime, endTime);

			return workedHours.Minutes;
		}
	}
}