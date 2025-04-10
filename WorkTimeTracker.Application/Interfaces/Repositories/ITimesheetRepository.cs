using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Interfaces.Repositories
{
	public interface ITimesheetRepository
	{
		Task<TimesheetDto?> GetTodayTimesheet(string userId);

		Task<TimesheetDto?> GetTimesheetByDate(string userId, DateTime date);

		Task<List<TimesheetDto>> GetCurrentUserMonthlyTimesheets(string userId, int month, int year);

		Task<List<TimesheetFullDto>> GetMonthlyTimesheets(int month, int year);

		Task<D> CreateTimesheetAsync<D>(Timesheet timesheet) where D : class;

	}
}