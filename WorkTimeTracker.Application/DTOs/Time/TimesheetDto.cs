using WorkTimeTracker.Application.DTOs.Requests;

namespace WorkTimeTracker.Application.DTOs.Time
{
	public class TimesheetDto : TimesheetMinimalDto
	{
		public List<RequestMinimalDto> Requests { get; set; } = [];
	}
}