using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Models.Audit;

public abstract class AuditEntity<TId> : Entity<TId>
{
	[Required]
	public required DateTime CreatedAt { get; set; } = new DateTime();

	public DateTime? UpdateAt { get; set; }

	public string? CreatedBy { get; set; }

	public string? LastModifiedBy { get; set; }
}