using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Responses.Time
{
	public class TimesheetResponse<T>
	{
		[Required]
		public DateTime ServerTime { get; set; } = DateTime.Now;

		[Required]
		public required T Timesheet { get; set; }
	}
}