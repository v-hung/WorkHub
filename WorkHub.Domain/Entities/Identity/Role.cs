using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Domain.Entities.Identity;
public class Role : IdentityRole<Guid>, IEntity<Guid>
{
	[Required]
	[StringLength(255)]
	public string Description { get; set; } = "";

	[Required]
	public bool IsAdmin { get; set; } = false;
}
