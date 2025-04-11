using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Domain.Entities.Misc
{
	public class Notification : AuditEntity<int>
	{
		[StringLength(255)]
		public required string Title { get; set; }

		[StringLength(255)]
		public string Message { get; set; } = string.Empty;

		public required NotificationType Type { get; set; }

		public bool IsRead { get; set; } = false;

		// Navigation properties

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		public User? User { get; set; }

	}
}