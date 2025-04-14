using WorkHub.Application.DTOs.Work;

namespace WorkHub.Application.DTOs.Organization
{
	public class TeamFullDto : TeamDto
	{
		public List<ProjectMinimalDto> Projects { get; set; } = [];
	}
}