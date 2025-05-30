using WorkHub.Application.DTOs.Time;

namespace WorkHub.Application.Interfaces.Services
{
	public interface ITimesheetService
	{
		Task<TimesheetDto> PerformCheckIn(string userId);

		Task<TimesheetDto> PerformCheckOut(string userId);

		Task<TimesheetDto> RecalculateWorkedMinutes(string userId, DateTime date);
	}
}