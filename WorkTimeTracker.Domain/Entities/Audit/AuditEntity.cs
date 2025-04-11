using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Domain.Entities.Audit;

public abstract class AuditEntity<TId> : IAuditEntity<TId>
{
	[Required]
	public TId Id { get; set; } = default!;

	[Required]
	public DateTime CreatedAt { get; set; } = new DateTime();

	public DateTime? UpdatedAt { get; set; }

	[StringLength(255)]
	public string? CreatedBy { get; set; }

	[StringLength(255)]
	public string? LastModifiedBy { get; set; }
}