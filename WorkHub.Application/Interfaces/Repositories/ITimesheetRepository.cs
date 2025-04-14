using WorkHub.Application.DTOs.Time;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Interfaces.Repositories
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