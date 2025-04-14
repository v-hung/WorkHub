using System.ComponentModel.DataAnnotations;

namespace WorkHub.Domain.Entities.Audit;

public abstract class Entity<TId> : IEntity<TId>
{
	[Required]
	public TId Id { get; set; } = default!;
}