using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Application.DTOs.Identity;

public class UserDto : UserMinimalDto, IRoleAudit<string>
{
	[Required]
	public bool IsFirstLogin { get; set; } = true;

	[Required]
	public int RemainingLeaveMinutes { get; set; } = 0;

	// AuditEntity

	[Required]
	public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

	public DateTime? UpdatedAt { get; set; }

	public string? CreatedBy { get; set; }

	public string? LastModifiedBy { get; set; }

	// Navigation properties

	public List<string> Roles { get; set; } = [];

	[Required]
	public WorkTimeDto WorkTime { get; set; } = new WorkTimeDto();

	public UserMinimalDto? Supervisor { get; set; }

	public TeamMinimalDto? Team { get; set; }
}