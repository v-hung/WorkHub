using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Features.Requests.DTOs
{
	public class CreateLeaveRequestDto : CreateRequestDto
	{
		[Required]
		public DateTime BreakStartDate { get; set; }

		[Required]
		public DateTime BreakEndDate { get; set; }
	}
}