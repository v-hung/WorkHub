using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Responses.Work
{
	public class TimesheetResponse<T>
	{
		[Required]
		public DateTime ServerTime { get; set; } = DateTime.UtcNow;

		[Required]
		public T? Timesheet { get; set; }
	}
}