using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.DTOs.Work;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.DTOs.Identity;

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
	public WorkScheduleDto WorkSchedule { get; set; } = new WorkScheduleDto();

	public UserMinimalDto? Supervisor { get; set; }

	public TeamMinimalDto? Team { get; set; }
}