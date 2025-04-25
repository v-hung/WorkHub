using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;
using WorkHub.Domain.Entities.Organization;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Domain.Entities.Identity;
public class User : IdentityUser<Guid>, IAuditEntity<Guid>, ISoftDeleteEntity
{

	[Required]
	[StringLength(255)]
	public required string FullName { get; set; }

	[StringLength(255)]
	public string? Image { get; set; }

	public UserPosition? UserPosition { get; set; }

	[Required]
	public bool IsFirstLogin { get; set; } = true;

	[Required]
	public int RemainingLeaveMinutes { get; set; } = 0;

	[Required]
	public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

	// AuditEntity

	[Required]
	public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

	public DateTime? UpdatedAt { get; set; }

	[StringLength(255)]
	public string? CreatedBy { get; set; }

	[StringLength(255)]
	public string? LastModifiedBy { get; set; }

	public bool IsDeleted { get; set; } = false;

	// Navigation properties

	[Required]
	public IList<RefreshToken> RefreshTokens { get; set; } = [];

	[ForeignKey("WorkTime")]
	public int? WorkTimeId { get; set; }

	public WorkTime? WorkTime { get; set; }

	public UserDetail? UserDetail { get; set; }

	public IList<Timesheet> Timesheets { get; set; } = [];

	// Supervisor
	[ForeignKey("Supervisor")]
	public Guid? SupervisorId { get; set; }
	public User? Supervisor { get; set; }

	[DeleteBehavior(DeleteBehavior.Restrict)]
	[InverseProperty("Supervisor")]
	public IList<User> Supervisors { get; set; } = [];

	// Request
	public IList<Request> Requests { get; set; } = [];
	public IList<Request> ApprovedRequests { get; set; } = [];

	// Team
	[ForeignKey("Team")]
	public int? TeamId { get; set; }

	[DeleteBehavior(DeleteBehavior.SetNull)]
	public Team? Team { get; set; }

	[Required]
	public IList<Team> ManagerTeams { get; set; } = [];

	// Project
	public IList<Project> ManagerProjects { get; set; } = [];

	[Required]
	public IList<Project> Projects { get; set; } = [];

	// 3rd party

	public string? BioStarUserId { get; set; }

}