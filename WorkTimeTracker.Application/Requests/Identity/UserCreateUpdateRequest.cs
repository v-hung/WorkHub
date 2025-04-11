using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.Requests.Identity
{
	public class UserCreateUpdateRequest
	{
		[Required]
		[StringLength(255)]
		public required string FullName { get; set; }

		[Required]
		[StringLength(255)]
		[EmailAddress]
		public required string Email { get; set; }

		public string? PhoneNumber { get; set; }

		public string? Image { get; set; }

		[Required]
		public required UserPosition UserPosition { get; set; }

		public int LeaveHours { get; set; } = 0;

		[Required]
		public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

		// Navigation properties

		public int? WorkTimeId { get; set; }

		public UserDetailDto? UserDetail { get; set; }

		public Guid? SupervisorId { get; set; }

		public int? TeamId { get; set; }

		public IList<int> ManagerTeamIds { get; set; } = [];

		[Required]
		public IList<string> RoleNames { get; set; } = [];

		public string? Password { get; set; }

	}
}