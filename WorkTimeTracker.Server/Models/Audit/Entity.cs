using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Models.Audit;

public abstract class Entity<TId> : IEntity<TId>
{
	[Required]
	public TId Id { get; set; } = default!;
}