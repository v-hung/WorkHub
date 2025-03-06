using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.DTOs.Work
{
	public class ProjectMinimalDto : IEntity<int>
	{

		[Required]
		public int Id { get; set; }

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		public ProjectStatus Status { get; set; }

	}
}