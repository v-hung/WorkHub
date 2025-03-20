using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Domain.Entities.Audit;

public abstract class Entity<TId> : IEntity<TId>
{
	[Required]
	public TId Id { get; set; } = default!;
}