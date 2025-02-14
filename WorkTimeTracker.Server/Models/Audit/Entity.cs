using System.ComponentModel.DataAnnotations;

namespace Timesheet.Server.Models.Audit;

public abstract class Entity<TId>
{
    [Required]
    public required TId Id { get; set; }
}