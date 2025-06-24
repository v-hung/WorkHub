using System.ComponentModel.DataAnnotations;
using WorkHub.Application.Attributes;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.DTOs.Work
{
	[LocalizePrefix("Project")]
	public class ProjectMinimalDto : IEntity<int>
	{

		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		[Localize]
		public string? Description { get; set; }

		public DateTime? StartDate { get; set; }

		public DateTime? EndDate { get; set; }

		[Required]
		public ProjectStatus Status { get; set; }

	}
}