using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Utils;
using WorkTimeTracker.Domain.Entities.Time;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services
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
				throw new BusinessException(HttpStatusCode.BadRequest, _localizer["CheckInAlreadyPerformed"]);
			}

			Timesheet timesheet = new Timesheet
			{
				UserId = new Guid(userId),
				Date = DateTime.Now.Date,
				StartTime = DateTime.Now,
			};

			_context.Timesheets.Add(timesheet);
			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);

		}

		public async Task<TimesheetDto> PerformCheckOut(string userId)
		{
			Timesheet timesheet = _context.Timesheets.Include(t => t.User).FirstOrDefault(t => t.UserId == new Guid(userId) && t.Date.Date == DateTime.Today) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound"]);

			if (timesheet.EndTime != null)
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["Checked out"]);
			}

			timesheet.EndTime = DateTime.Now;
			timesheet.WorkedMinutes = CalculateWorked(userId, timesheet.StartTime, timesheet.EndTime.Value);

			_context.Timesheets.Update(timesheet);

			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);

		}

		public int CalculateWorked(string userId, DateTime startTime, DateTime endTime)
		{
			WorkTime workTime = _context.WorkTimes.FirstOrDefault(w => w.Users.Any(u => u.Id == new Guid(userId))) ?? new WorkTime();

			TimeSpan workedHours = TimesheetUtils.CalculateWorkTime(startTime, endTime);

			return workedHours.Minutes;
		}
	}
}