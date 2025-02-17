using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Models.Requests
{
	public class TimesheetRequest : Request
	{
		[Required]
		public DateTime WorkDate { get; set; }

		public TimeSpan? OldCheckIn { get; set; }
		public TimeSpan? OldCheckOut { get; set; }
		public TimeSpan? NewCheckIn { get; set; }
		public TimeSpan? NewCheckOut { get; set; }
	}
}