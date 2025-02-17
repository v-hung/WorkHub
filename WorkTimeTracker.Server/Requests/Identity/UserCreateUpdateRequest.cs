using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Models.Enums;

namespace WorkTimeTracker.Server.Requests.Identity
{
	public class UserCreateUpdateRequest
	{
		[Required]
		public required string FullName { get; set; }

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

		public int? WorkTimeId { get; set; }

		public UserDetailDto? UserDetail { get; set; }

		public Guid? SupervisorId { get; set; }

		public int? TeamId { get; set; }

		[Required]
		public IList<int> ManagerTeamIds { get; set; } = [];

		[Required]
		public IList<int> ManagerProjectIds { get; set; } = [];

		[Required]
		public IList<string> RoleNames { get; set; } = [];

	}
}