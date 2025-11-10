using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Work
{
	public class TimesheetFullDto : TimesheetDto
	{
		public UserMinimalDto? User { get; set; }

	}
}