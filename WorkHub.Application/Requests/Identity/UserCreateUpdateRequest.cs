using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.Requests.Identity
{
	public class UserCreateUpdateRequest
	{
		[Required]
		[StringLength(255)]
		public required string FullName { get; set; }

		[Required]
		[StringLength(255)]
		public required string UserName { get; set; }

		[StringLength(255)]
		[EmailAddress]
		public string? Email { get; set; }

		public string? PhoneNumber { get; set; }

		public UserPosition UserPosition { get; set; }

		public int LeaveHours { get; set; } = 0;

		public UserStatus UserStatus { get; set; } = UserStatus.ACTIVE;

		// Navigation properties

		public int? WorkScheduleId { get; set; }

		public UserDetailDto? UserDetail { get; set; }

		public Guid? SupervisorId { get; set; }

		public int? TeamId { get; set; }

		public IList<int> ManagerTeamIds { get; set; } = [];

		[Required]
		public IList<string> RoleNames { get; set; } = [];

		public string? Password { get; set; }

	}
}