using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Models.Enums;
using WorkTimeTracker.Server.Models.Identity;

namespace WorkTimeTracker.Server.Models.Requests
{
	public abstract class Request : Entity<int>
	{

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

		[ForeignKey("ApprovedBy")]
		public Guid? ApprovedById { get; set; }

		[Required]
		[InverseProperty("ApprovedRequests")]
		public User? ApprovedBy { get; set; }

	}
}