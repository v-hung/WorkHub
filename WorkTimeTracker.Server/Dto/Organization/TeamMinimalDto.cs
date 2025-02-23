using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Server.Models.Audit;

namespace WorkTimeTracker.Server.Dto.Organization
{
	public class TeamMinimalDto : IEntity<int>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }
	}
}