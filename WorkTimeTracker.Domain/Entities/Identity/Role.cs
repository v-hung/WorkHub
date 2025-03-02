using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Domain.Entities.Identity;
public class Role : IdentityRole<Guid>, IEntity<Guid>
{
    [Required]
    public string Description { get; set; } = "";

    [Required]
    public bool IsAdmin { get; set; } = false;
}
