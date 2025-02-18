using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Dto.Organization
{
	public class TeamMinimalDto
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }
	}
}