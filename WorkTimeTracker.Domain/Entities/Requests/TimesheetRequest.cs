using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Domain.Entities.Requests
{
	public class TimesheetRequest : Request
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