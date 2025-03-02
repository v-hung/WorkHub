using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Domain.Entities.Audit;

public abstract class AuditEntity<TId> : IAuditEntity<TId>
{
    [Required]
    public TId Id { get; set; } = default!;

    [Required]
    public required DateTime CreatedAt { get; set; } = new DateTime();

    public DateTime? UpdatedAt { get; set; }

    public string? CreatedBy { get; set; }

    public string? LastModifiedBy { get; set; }
}