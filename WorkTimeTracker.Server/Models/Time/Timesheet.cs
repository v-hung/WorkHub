using Timesheet.Server.Models.Identity;

namespace Timesheet.Server.Models.Time
{
	public class Timesheet
	{

		public Guid id { get; set; } = Guid.NewGuid();

		public DateTime date { get; set; }

		public DateTime startTime { get; set; }

		public DateTime endTime { get; set; }

		public int workMinutes { get; set; }

		public required User user { get; set; }
	}
}