using WorkTimeTracker.Application.DTOs.Identity;

namespace WorkTimeTracker.Application.DTOs.Time
{
	public class TimesheetDto : TimesheetMinimalDto
	{
		public UserMinimalDto? User { get; set; }

	}
}