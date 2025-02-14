using System.ComponentModel.DataAnnotations;

namespace Timesheet.Server.Models.Audit;

public abstract class AuditEntity<TId> : Entity<TId>
{
	[Required]
	public DateTime CreatedAt { get; set; }

	public DateTime? UpdateAt { get; set; }

	public string? CreatedBy { get; set; }

	public string? LastModifiedBy { get; set; }
}