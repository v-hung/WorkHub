using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.DTOs.Organization
{
	public class TeamReferenceDto : IEntity<int>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }
	}
}