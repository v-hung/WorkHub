using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Domain.Entities.Time
{
	public class Timesheet : Entity<Guid>
	{
		[Required]
		public required DateTime Date { get; set; }

		public DateTime? StartTime { get; set; }

		public DateTime? EndTime { get; set; }

		public int WorkedMinutes { get; set; } = 0;

		public bool IsActive { get; set; } = true;

		// Navigation

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		public User? User { get; set; }

		public List<Request> Requests { get; set; } = [];

	}
}