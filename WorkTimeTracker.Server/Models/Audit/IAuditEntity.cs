using System.ComponentModel.DataAnnotations;

namespace Timesheet.Server.Models.Audit;

public interface IAuditEntity : IEntity
{
	[Required]
	DateTime CreatedAt { get; set; }

	DateTime? UpdatedAt { get; set; }

	string? CreatedBy { get; set; }

	string? LastModifiedBy { get; set; }
}

public interface IAuditEntity<TId> : IAuditEntity, IEntity<TId>
{
}