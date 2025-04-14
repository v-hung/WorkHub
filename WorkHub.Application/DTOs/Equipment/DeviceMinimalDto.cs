using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.DTOs.Equipment
{
	public class DeviceMinimalDto : Entity<int>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public string? Location { get; set; }

		public DeviceStatus Status { get; set; } = DeviceStatus.NEW;
	}
}