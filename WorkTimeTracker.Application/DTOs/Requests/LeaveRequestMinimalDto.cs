using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public class LeaveRequestMinimalDto : RequestMinimalDto
	{
		[Required]
		public DateTime BreakStartDate { get; set; }

		[Required]
		public DateTime BreakEndDate { get; set; }
	}
}