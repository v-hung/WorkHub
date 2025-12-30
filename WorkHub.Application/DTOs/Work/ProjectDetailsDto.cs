using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.DTOs.Identity;
namespace WorkHub.Application.DTOs.Work
{
	public class ProjectDetailsDto : ProjectReferenceDto
	{
		public TeamReferenceDto? Team { get; set; }

		public UserReferenceDto? Manager { get; set; }

		public IList<UserReferenceDto> Members { get; set; } = [];
	}
}