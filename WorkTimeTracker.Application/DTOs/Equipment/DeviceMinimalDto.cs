using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.DTOs.Equipment
{
	public class DeviceMinimalDto : Entity<int>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public string? Location { get; set; }

		public DeviceStatus Status { get; set; } = DeviceStatus.New;
	}
}