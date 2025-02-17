using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Models.Enums;
namespace WorkTimeTracker.Server.Dto.Work
{
	public class ProjectDto
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		public ProjectStatus Status { get; set; }

		// Navigation

		public TeamDto? Team { get; set; }
		public UserDto? Manager { get; set; }

		public IList<UserDto> Members { get; set; } = [];
	}
}