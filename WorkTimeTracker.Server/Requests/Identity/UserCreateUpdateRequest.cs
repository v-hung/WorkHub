using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Models.Enums;

namespace WorkTimeTracker.Server.Requests.Identity
{
	public class UserCreateUpdateRequest
	{
		[Required]
		public required string FullName { get; set; }

		[Required]
		public required string UserName { get; set; }

		[Required]
		public required string Email { get; set; }


		public string? PhoneNumber { get; set; }

		public string? Image { get; set; }

		[Required]
		public required UserPosition UserPosition { get; set; }

		[Required]
		public int LeaveHours { get; set; } = 0;

		[Required]
		public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

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