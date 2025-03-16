using System.Net;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
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

		public async Task<List<D>> GetCurrentUserMonthlyTimesheets<D>(string userId, int month, int year) where D : class
		{

			if (!Guid.TryParse(userId, out var guidUserId))
			{
				throw new ArgumentException("Invalid user ID format", nameof(userId));
			}

			var startDate = new DateTime(year, month, 1);
			var endDate = startDate.AddMonths(1);

			return await _context.Timesheets.AsNoTracking()
				.Where(t => t.UserId == guidUserId && t.StartTime >= startDate && t.StartTime < endDate)
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.ToListAsync();
		}

		public async Task<List<D>> GetMonthlyTimesheets<D>(int month, int year) where D : class
		{
			var startDate = new DateTime(year, month, 1);
			var endDate = startDate.AddMonths(1);

			return await _context.Timesheets.AsNoTracking()
				.Where(t => t.StartTime >= startDate && t.StartTime < endDate)
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.ToListAsync();
		}

		public async Task<D?> GetTodayTimesheet<D>(string userId) where D : class
		{
			return await _context.Timesheets.AsNoTracking()
				.Where(t => t.UserId == new Guid(userId) && t.StartTime.Date == DateTime.Today)
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync();
		}

		public async Task<D> PerformCheckIn<D>(string userId) where D : class
		{
			Timesheet? timesheetDb = _context.Timesheets.FirstOrDefault(t => t.UserId == new Guid(userId) && t.StartTime.Date == DateTime.Today);

			if (timesheetDb != null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, _localizer["CheckInAlreadyPerformed"]);
			}

			Timesheet timesheet = new Timesheet
			{
				UserId = new Guid(userId),
				StartTime = DateTime.Now
			};

			_context.Timesheets.Add(timesheet);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(timesheet);

		}

		public async Task<D> PerformCheckOut<D>(string userId) where D : class
		{
			Timesheet timesheet = _context.Timesheets.FirstOrDefault(t => t.UserId == new Guid(userId) && t.StartTime.Date == DateTime.Today) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound"]);

			if (timesheet.EndTime != null)
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["Checked out"]);
			}

			timesheet.EndTime = DateTime.Now;
			_context.Timesheets.Update(timesheet);

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(timesheet);

		}
	}
}