using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Domain.Entities.Time
{
	public class Timesheet : Entity<Guid>
	{
		[Required]
		public required DateTime StartTime { get; set; }

		public DateTime EndTime { get; set; }

		public int WorkMinutes { get; set; }

		// Navigation

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		public User? User { get; set; }

	}
}