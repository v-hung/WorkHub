using System.ComponentModel.DataAnnotations;

namespace WorkHub.Domain.Entities.Requests
{
	public class TimesheetAdjustmentRequest : Request
	{
		[Required]
		public DateTime CheckIn { get; set; }

		[Required]
		public DateTime CheckOut { get; set; }

		public DateTime BreakStartDate { get; set; }

		public DateTime BreakEndDate { get; set; }
	}
}