using WorkHub.Application.DTOs.Identity;
using WorkHub.Application.DTOs.Requests;

namespace WorkHub.Application.DTOs.Work
{
	public class TimesheetDetailsDto : TimesheetReferenceDto
	{
		public List<RequestCombinedReferenceDto> Requests { get; set; } = [];

		public UserReferenceDto? User { get; set; }
	}
}