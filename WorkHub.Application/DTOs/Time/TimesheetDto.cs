using WorkHub.Application.DTOs.Requests;

namespace WorkHub.Application.DTOs.Time
{
	public class TimesheetDto : TimesheetMinimalDto
	{
		public List<RequestCombinedMinimalDto> Requests { get; set; } = [];
	}
}