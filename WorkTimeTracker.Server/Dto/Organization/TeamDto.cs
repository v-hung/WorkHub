using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.User;

namespace WorkTimeTracker.Server.Dto.Organization
{
	public class TeamDto
	{

		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		[Required]
		public int TotalMembers { get; set; } = 0;
		[Required]
		public int CompletedProjects { get; set; } = 0;
		[Required]
		public int ActiveProjects { get; set; } = 0;

		// Navigation
		public UserDto? Manager { get; set; }

	}
}