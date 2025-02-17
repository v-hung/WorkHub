using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Dto.Time;
using WorkTimeTracker.Server.Models.Enums;

namespace WorkTimeTracker.Server.Dto.User;

public class UserDto
{
	[Required]
	public required Guid Id { get; set; }

	[Required]
	public string? Email { get; set; }

	[Required]
	public string? FullName { get; set; }

	public string? PhoneNumber { get; set; }

	public string? Image { get; set; }

	[Required]
	public required UserPosition UserPosition { get; set; }

	[Required]
	public bool IsFirstLogin { get; set; } = true;

	[Required]
	public int LeaveHours { get; set; } = 0;

	[Required]
	public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

	// AuditEntity

	[Required]
	public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

	public DateTime? UpdatedAt { get; set; }

	public string? CreatedBy { get; set; }

	public string? LastModifiedBy { get; set; }

	// Navigation properties
	public WorkTimeDto? WorkTime { get; set; } = new WorkTimeDto();

	public UserDto? Supervisor { get; set; }

	public TeamDto? Team { get; set; }
}