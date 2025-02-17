using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkTimeTracker.Server.Models.Identity;
public class RefreshToken
{

	[Key]
	[Required]
	public required string Token { get; set; }

	[Required]
	public required DateTime Expires { get; set; }

	[Required]
	public required bool RememberMe { get; set; } = false;

	[Required]
	public DateTime Created { get; set; }

	[Required]
	[ForeignKey("User")]
	public Guid UserId { get; set; }

	public User? User { get; set; }

}