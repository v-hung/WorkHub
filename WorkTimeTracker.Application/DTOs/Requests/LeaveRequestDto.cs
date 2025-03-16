using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public class LeaveRequestDto : RequestDto
	{
		[Required]
		public DateTime BreakStartDate { get; set; }

		[Required]
		public DateTime BreakEndDate { get; set; }
	}
}