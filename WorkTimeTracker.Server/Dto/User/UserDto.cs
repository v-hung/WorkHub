using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Dto.Time;

namespace WorkTimeTracker.Server.Dto.User;

public class UserDto : UserMinimalDto
{

	[Required]
	public bool IsFirstLogin { get; set; } = true;

	[Required]
	public int LeaveHours { get; set; } = 0;

	// AuditEntity

	[Required]
	public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

	public DateTime? UpdatedAt { get; set; }

	public string? CreatedBy { get; set; }

	public string? LastModifiedBy { get; set; }

	// Navigation properties
	public WorkTimeDto? WorkTime { get; set; } = new WorkTimeDto();

	public UserMinimalDto? Supervisor { get; set; }

	public TeamMinimalDto? Team { get; set; }

}