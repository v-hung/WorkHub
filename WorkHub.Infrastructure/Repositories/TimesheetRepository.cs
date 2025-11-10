using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Work;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Repositories
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
				.Where(t => t.UserId == guidUserId && t.Date >= startDate && t.Date < endDate)
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

		public async Task<Paginated<TimesheetFullDto>> GetMonthlyTimesheets(int month, int year, int pageNumber, int pageSize, List<Guid> Ids)
		{
			var startDate = new DateTime(year, month, 1);
			var daysInMonth = DateTime.DaysInMonth(year, month);
			var endDate = startDate.AddMonths(1);

			var allDays = Enumerable.Range(0, daysInMonth)
				.Select(day => startDate.AddDays(day).Date)
				.ToList();

			var query = _context.Timesheets.AsNoTracking()
				.Where(t => t.Date >= startDate && t.Date < endDate);

			if (Ids.Count > 0)
			{
				query = query.Where(t => t.UserId.HasValue && Ids.Contains(t.UserId.Value));
			}

			var totalRecords = await query.CountAsync();

			var timesheets = await query.ProjectTo<TimesheetFullDto>(_mapper.ConfigurationProvider).Skip((pageNumber - 1) * pageSize)
				.Take(pageSize).OrderBy(t => t.Date).ToListAsync();

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

			return new Paginated<TimesheetFullDto>(result, totalRecords, pageNumber, pageSize);
		}

		public async Task<TimesheetDto?> GetTodayTimesheet(string userId)
		{
			var today = DateTime.Today;
			var tomorrow = today.AddDays(1);

			return await _context.Timesheets.AsNoTracking()
				.Where(t => t.UserId == new Guid(userId) && t.Date >= today && t.Date < tomorrow)
				.ProjectTo<TimesheetDto>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync();
		}

		public async Task<TimesheetDto?> GetTimesheetByDate(string userId, DateTime date)
		{
			var startOfDay = date.Date;
			var endOfDay = startOfDay.AddDays(1);

			return await _context.Timesheets.AsNoTracking()
				.Where(t => t.UserId == new Guid(userId) && t.Date >= startOfDay && t.Date < endOfDay)
				.ProjectTo<TimesheetDto>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync();
		}

		public async Task<D> CreateTimesheetAsync<D>(Timesheet timesheet) where D : class
		{
			await _context.Timesheets.AddAsync(timesheet);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(timesheet);
		}
	}
}