using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Dto.Work;

namespace WorkTimeTracker.Server.Dto.User
{
	public class UserFullDto : UserDto
	{
		public UserDetailDto? UserDetail { get; set; }

		public IList<TeamMinimalDto> ManagerTeams { get; set; } = [];
	}
}