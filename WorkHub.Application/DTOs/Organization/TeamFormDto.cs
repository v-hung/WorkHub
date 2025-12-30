using WorkHub.Application.DTOs.Work;

namespace WorkHub.Application.DTOs.Organization
{
	public class TeamFormDto : TeamDetailsDto
	{
		public List<ProjectReferenceDto> Projects { get; set; } = [];
	}
}