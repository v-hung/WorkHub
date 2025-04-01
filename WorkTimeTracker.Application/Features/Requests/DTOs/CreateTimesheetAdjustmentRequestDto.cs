using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Features.Requests.DTOs
{
	public class CreateTimesheetAdjustmentRequestDto : CreateRequestDto
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