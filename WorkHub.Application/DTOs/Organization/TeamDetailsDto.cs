using System.ComponentModel.DataAnnotations;
using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Organization
{
	public class TeamDetailsDto : TeamReferenceDto
	{
		[Required]
		public int CompletedProjects { get; set; } = 0;

		[Required]
		public int ActiveProjects { get; set; } = 0;

		// Navigation
		public UserReferenceDto? Manager { get; set; }
		public IList<UserReferenceDto> Members { get; set; } = [];
	}
}