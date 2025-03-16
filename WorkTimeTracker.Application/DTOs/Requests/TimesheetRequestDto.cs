using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.DTOs.Requests
{
	public class TimesheetRequestDto : RequestDto
	{
		[Required]
		public DateTime CheckIn { get; set; }

		[Required]
		public DateTime CheckOut { get; set; }

		[Required]
		public DateTime BreakStartDate { get; set; }

		[Required]
		public DateTime BreakEndDate { get; set; }
	}
}