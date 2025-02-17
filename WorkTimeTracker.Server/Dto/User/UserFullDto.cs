using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Dto.Work;

namespace WorkTimeTracker.Server.Dto.User
{
	public class UserFullDto : UserDto
	{
		public UserDetailDto? UserDetail { get; set; }

		public IList<TeamDto> ManagerTeams { get; set; } = [];

		public IList<ProjectDto> ManagerProjects { get; set; } = [];
	}
}