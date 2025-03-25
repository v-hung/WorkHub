using WorkTimeTracker.Application.DTOs.Time;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface ITimesheetService
	{
		Task<TimesheetDto> PerformCheckIn(string userId);

		Task<TimesheetDto> PerformCheckOut(string userId);
	}
}