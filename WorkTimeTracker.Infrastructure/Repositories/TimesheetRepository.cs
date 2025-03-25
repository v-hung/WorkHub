using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;
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
	}
}