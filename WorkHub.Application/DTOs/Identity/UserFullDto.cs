using WorkHub.Application.DTOs.Organization;

namespace WorkHub.Application.DTOs.Identity
{
	public class UserFullDto : UserDto
	{
		public UserDetailDto? UserDetail { get; set; }

		public IList<TeamMinimalDto> ManagerTeams { get; set; } = [];
	}
}