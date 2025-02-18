using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Dto.Work;

namespace WorkTimeTracker.Server.Dto.Organization
{
	public class TeamFullDto : TeamDto
	{

		public IList<UserMinimalDto> Members { get; set; } = [];

		public List<ProjectMinimalDto> Projects { get; set; } = [];

	}
}