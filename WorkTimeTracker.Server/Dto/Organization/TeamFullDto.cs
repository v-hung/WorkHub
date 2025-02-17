using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Dto.Work;

namespace WorkTimeTracker.Server.Dto.Organization
{
	public class TeamFullDto : TeamDto
	{

		public IList<UserDto> Members { get; set; } = [];

		public List<ProjectDto> Projects { get; set; } = [];

	}
}