using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Models.Audit;

public abstract class Entity<TId>
{
	[Required]
	public required TId Id { get; set; }
}