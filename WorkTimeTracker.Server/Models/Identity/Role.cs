using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WorkTimeTracker.Server.Models.Identity;
public class Role : IdentityRole<Guid>
{
	[Required]
	public string Description { get; set; } = "";

	[Required]
	public bool IsAdmin { get; set; } = false;
}
