using WorkHub.Application.DTOs.Work;

namespace WorkHub.Application.Interfaces.Services
{
	public interface ITimesheetService
	{
		Task<TimesheetDetailsDto> PerformCheckIn(string userId);

		Task<TimesheetDetailsDto> PerformCheckOut(string userId);

		Task<TimesheetDetailsDto?> RecalculateWorkedMinutes(string userId, DateTime date);
	}
}