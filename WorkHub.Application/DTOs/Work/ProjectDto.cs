using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.DTOs.Identity;
namespace WorkHub.Application.DTOs.Work
{
	public class ProjectDto : ProjectMinimalDto
	{
		public TeamMinimalDto? Team { get; set; }

		public UserMinimalDto? Manager { get; set; }

		public IList<UserMinimalDto> Members { get; set; } = [];
	}
}