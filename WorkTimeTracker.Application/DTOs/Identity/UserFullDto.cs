using WorkTimeTracker.Application.DTOs.Organization;

namespace WorkTimeTracker.Application.DTOs.Identity
{
	public class UserFullDto : UserDto
	{
		public UserDetailDto? UserDetail { get; set; }

		public IList<TeamMinimalDto> ManagerTeams { get; set; } = [];
	}
}