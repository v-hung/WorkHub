using WorkHub.Application.DTOs.Work;

namespace WorkHub.Application.Interfaces.Services
{
	public interface ITimesheetService
	{
		Task<TimesheetDto> PerformCheckIn(string userId);

		Task<TimesheetDto> PerformCheckOut(string userId);

		Task<TimesheetDto?> RecalculateWorkedMinutes(string userId, DateTime date);
	}
}