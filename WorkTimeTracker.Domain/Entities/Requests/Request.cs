using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Domain.Entities.Requests
{
	public abstract class Request : Entity<int>
	{

		[Required]
		public required DateTime Date { get; set; }

		[Required]
		public RequestType RequestType { get; set; }

		[Required]
		[MaxLength(500)]
		public string Reason { get; set; } = string.Empty;

		public RequestStatus Status { get; set; } = RequestStatus.PENDING;

		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

		// Navigation properties

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		[InverseProperty("Requests")]
		public User? User { get; set; }

		[ForeignKey("Approved")]
		public Guid? ApprovedId { get; set; }

		[Required]
		[InverseProperty("ApprovedRequests")]
		public User? Approved { get; set; }

		[ForeignKey("Timesheet")]
		public Guid? TimesheetId { get; set; }

		public Timesheet? Timesheet { get; set; }

	}
}