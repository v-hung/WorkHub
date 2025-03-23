using System.Net;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Time;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Repositories
{
	public class TimesheetRepository : ITimesheetRepository
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer<TimesheetRepository> _localizer;

		public TimesheetRepository(ApplicationDbContext context, IMapper mapper, IStringLocalizer<TimesheetRepository> localizer)
		{
			_context = context;
			_mapper = mapper;
			_localizer = localizer;
		}

		public async Task<List<TimesheetDto>> GetCurrentUserMonthlyTimesheets(string userId, int month, int year)
		{

			if (!Guid.TryParse(userId, out var guidUserId))
			{
				throw new ArgumentException("Invalid user ID format", nameof(userId));
			}

			var startDate = new DateTime(year, month, 1);
			var daysInMonth = DateTime.DaysInMonth(year, month);
			var endDate = startDate.AddMonths(1);

			var allDays = Enumerable.Range(0, daysInMonth)
				.Select(day => startDate.AddDays(day).Date)
				.ToList();

			var timesheets = await _context.Timesheets.AsNoTracking()
				.Where(t => t.UserId == guidUserId && t.StartTime >= startDate && t.StartTime < endDate)
				.ProjectTo<TimesheetDto>(_mapper.ConfigurationProvider)
				.ToListAsync();

			var result = allDays.GroupJoin(
				timesheets,
				day => day,
				timesheet => timesheet.Date.Date,
				(day, times) => new TimesheetDto
				{
					Id = times.FirstOrDefault()?.Id ?? Guid.NewGuid(),
					Date = day,
					StartTime = times.FirstOrDefault()?.StartTime,
					EndTime = times.FirstOrDefault()?.EndTime,
					Requests = times.FirstOrDefault()?.Requests ?? [],
					WorkMinutes = times.FirstOrDefault()?.WorkMinutes,
				}).ToList();

			return result;
		}

		public async Task<List<TimesheetFullDto>> GetMonthlyTimesheets(int month, int year)
		{
			var startDate = new DateTime(year, month, 1);
			var daysInMonth = DateTime.DaysInMonth(year, month);
			var endDate = startDate.AddMonths(1);

			var allDays = Enumerable.Range(0, daysInMonth)
				.Select(day => startDate.AddDays(day).Date)
				.ToList();

			var timesheets = await _context.Timesheets.AsNoTracking()
				.Where(t => t.StartTime >= startDate && t.StartTime < endDate)
				.ProjectTo<TimesheetFullDto>(_mapper.ConfigurationProvider)
				.ToListAsync();

			var result = allDays.GroupJoin(
				timesheets,
				day => day,
				timesheet => timesheet.Date.Date,
				(day, times) => new TimesheetFullDto
				{
					Id = times.FirstOrDefault()?.Id ?? Guid.NewGuid(),
					Date = day,
					StartTime = times.FirstOrDefault()?.StartTime,
					EndTime = times.FirstOrDefault()?.EndTime,
					Requests = times.FirstOrDefault()?.Requests ?? [],
					WorkMinutes = times.FirstOrDefault()?.WorkMinutes,
					User = times.FirstOrDefault()?.User,
				}).ToList();

			return result;
		}

		public async Task<TimesheetDto?> GetTodayTimesheet(string userId)
		{
			var today = DateTime.Today;
			var tomorrow = today.AddDays(1);

			return await _context.Timesheets.AsNoTracking()
					.Where(t => t.UserId == new Guid(userId) && t.StartTime >= today && t.StartTime < tomorrow)
					.ProjectTo<TimesheetDto>(_mapper.ConfigurationProvider)
					.FirstOrDefaultAsync();
		}

		public async Task<TimesheetDto> PerformCheckIn(string userId)
		{
			Timesheet? timesheetDb = _context.Timesheets.FirstOrDefault(t => t.UserId == new Guid(userId) && t.StartTime.Date == DateTime.Today);

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
			Timesheet timesheet = _context.Timesheets.FirstOrDefault(t => t.UserId == new Guid(userId) && t.StartTime.Date == DateTime.Today) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound"]);

			if (timesheet.EndTime != null)
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["Checked out"]);
			}

			timesheet.EndTime = DateTime.Now;
			_context.Timesheets.Update(timesheet);

			await _context.SaveChangesAsync();

			return _mapper.Map<TimesheetDto>(timesheet);

		}
	}
}