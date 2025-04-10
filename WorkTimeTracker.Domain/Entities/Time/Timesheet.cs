using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Domain.Entities.Time
{
	public class Timesheet : Entity<Guid>
	{
		[Required]
		public required DateTime Date { get; set; }

		public DateTime? StartTime { get; set; }

		public DateTime? EndTime { get; set; }

		public int WorkedMinutes { get; set; } = 0;

		// Navigation

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		public User? User { get; set; }

		public List<Request> Requests { get; set; } = [];

	}
}