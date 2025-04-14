using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Application.DTOs.Equipment
{
	public class DeviceCategoryMinimalDto : Entity<int>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }
	}
}