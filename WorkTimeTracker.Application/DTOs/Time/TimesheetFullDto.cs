using WorkTimeTracker.Application.DTOs.Identity;

namespace WorkTimeTracker.Application.DTOs.Time
{
	public class TimesheetFullDto : TimesheetDto
	{
		public UserMinimalDto? User { get; set; }

	}
}