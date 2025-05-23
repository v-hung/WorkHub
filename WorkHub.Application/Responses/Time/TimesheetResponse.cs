using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Responses.Time
{
	public class TimesheetResponse<T>
	{
		[Required]
		public DateTime ServerTime { get; set; } = DateTime.UtcNow;

		[Required]
		public required T Timesheet { get; set; }
	}
}