using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Enums;

namespace WorkHub.Domain.Entities.Misc
{
	[Table("notifications")]
	public class Notification : AuditEntity<int>
	{
		[StringLength(255)]
		public required string Title { get; set; }

		[StringLength(255)]
		public string Message { get; set; } = string.Empty;

		[Required]
		public DateTime Date { get; set; } = DateTime.UtcNow;

		public required NotificationCategory Category { get; set; }

		public string? RelatedEntityId { get; set; }

		public bool IsRead { get; set; } = false;

		// Navigation properties

		[ForeignKey("User")]
		public Guid? UserId { get; set; }

		[Required]
		public User? User { get; set; }

	}
}