using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Interfaces.Repositories
{
	public interface ITimesheetRepository
	{
		Task<TimesheetDto?> GetTodayTimesheet(string userId);

		Task<TimesheetDto?> GetTimesheetByDate(string userId, DateTime date);

		Task<List<TimesheetDto>> GetCurrentUserMonthlyTimesheets(string userId, int month, int year);

		Task<Paginated<TimesheetFullDto>> GetMonthlyTimesheets(int month, int year, int pageNumber, int pageSize, List<Guid> Ids);

		Task<D> CreateTimesheetAsync<D>(Timesheet timesheet) where D : class;

	}
}