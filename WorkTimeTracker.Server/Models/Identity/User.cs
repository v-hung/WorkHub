using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Timesheet.Server.Models.Audit;
using Timesheet.Server.Models.Time;

namespace Timesheet.Server.Models.Identity;
public class User : IdentityUser<Guid>, IAuditEntity
{

	[Required]
	public required string FullName { get; set; }

	public string? Address { get; set; }

	public string? Image { get; set; }

	[Required]
	public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

	public DateTime? UpdatedAt { get; set; }

	public string? CreatedBy { get; set; }

	public string? LastModifiedBy { get; set; }

	// Navigation properties

	[Required]
	public IList<RefreshToken> RefreshTokens { get; set; } = [];

	public WorkTime? WorkTime { get; set; }

	public IList<Time.Timesheet> Timesheets { get; set; } = [];

}