using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Domain.Entities.Identity;
public class RefreshToken : Entity<int>
{

	[Required]
	[StringLength(255)]
	public required string Token { get; set; }

	[Required]
	public required DateTime Expires { get; set; }

	[Required]
	public required bool RememberMe { get; set; } = false;

	[Required]
	public DateTime Created { get; set; }

	// Navigation properties

	[Required]
	[ForeignKey("User")]
	public Guid UserId { get; set; }

	public User? User { get; set; }

}