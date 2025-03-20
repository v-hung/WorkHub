using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Application.DTOs.Equipment
{
	public class DeviceCategoryMinimalDto : Entity<int>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }
	}
}