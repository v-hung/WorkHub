using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.User;

namespace WorkTimeTracker.Server.Dto.Organization
{
	public class TeamDto : TeamMinimalDto
	{

		[Required]
		public int TotalMembers { get; set; } = 0;

		[Required]
		public int CompletedProjects { get; set; } = 0;

		[Required]
		public int ActiveProjects { get; set; } = 0;

		// Navigation
		public UserMinimalDto? Manager { get; set; }

	}
}