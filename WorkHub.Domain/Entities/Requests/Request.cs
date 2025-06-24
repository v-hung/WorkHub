using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Domain.Entities.Requests
{
	[Table("requests")]
	public abstract class Request : Entity<int>
	{

		[Required]
		public required DateTime Date { get; set; }

		[Required]
		public required RequestType RequestType { get; set; }

		[Required]
		public required int DurationMinutes { get; set; } = 0;

		[Required]
		[MaxLength(500)]
		public required string Reason { get; set; } = string.Empty;

		public RequestStatus Status { get; set; } = RequestStatus.PENDING;

		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

		// Navigation properties

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		[InverseProperty("Requests")]
		public User? User { get; set; }

		[ForeignKey("Approver")]
		public Guid? ApproverId { get; set; }

		[Required]
		[InverseProperty("AssignedRequests")]
		public User? Approver { get; set; }

		[ForeignKey("Timesheet")]
		public Guid? TimesheetId { get; set; }

		public Timesheet? Timesheet { get; set; }

	}
}