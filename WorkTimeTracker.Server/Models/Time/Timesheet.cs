using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Server.Models.Identity;

namespace WorkTimeTracker.Server.Models.Time
{
	public class Timesheet
	{
		public Guid Id { get; set; } = Guid.NewGuid();

		public DateTime Date { get; set; }

		public DateTime StartTime { get; set; }

		public DateTime EndTime { get; set; }

		public int WorkMinutes { get; set; }

		// Navigation

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		public User? User { get; set; }
	}
}