using WorkTimeTracker.Application.DTOs.Time;

namespace WorkTimeTracker.Application.Interfaces.Repositories
{
	public interface ITimesheetRepository
	{
		Task<TimesheetDto?> GetTodayTimesheet(string userId);

		Task<List<TimesheetDto>> GetCurrentUserMonthlyTimesheets(string userId, int month, int year);

		Task<List<TimesheetFullDto>> GetMonthlyTimesheets(int month, int year);

	}
}