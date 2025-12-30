using WorkHub.Domain.Entities.Work;

namespace WorkHub.Domain.Repositories
{
	public interface ITimesheetRepository
	{
		Task<Timesheet?> GetTodayTimesheet(string userId);

		Task<Timesheet?> GetTimesheetByDate(string userId, DateTime date);

		Task<List<Timesheet>> GetCurrentUserMonthlyTimesheets(string userId, int month, int year);

		Task<(List<Timesheet>, int)> GetMonthlyTimesheets(int month, int year, int page, int pageSize, List<Guid> Ids);

		Task<Timesheet> CreateTimesheetAsync(Timesheet timesheet);

	}
}