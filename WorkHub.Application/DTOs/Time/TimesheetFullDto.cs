using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Time
{
	public class TimesheetFullDto : TimesheetDto
	{
		public UserMinimalDto? User { get; set; }

	}
}