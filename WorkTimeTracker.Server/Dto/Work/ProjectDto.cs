using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Dto.User;
namespace WorkTimeTracker.Server.Dto.Work
{
	public class ProjectDto : ProjectMinimalDto
	{

		public TeamMinimalDto? Team { get; set; }

		public UserMinimalDto? Manager { get; set; }

		public IList<UserMinimalDto> Members { get; set; } = [];
	}
}