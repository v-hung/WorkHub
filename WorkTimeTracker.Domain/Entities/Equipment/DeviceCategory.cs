using System.ComponentModel.DataAnnotations;
using WorkTimeTracker.Domain.Entities.Audit;

namespace WorkTimeTracker.Domain.Entities.Equipment
{
	public class DeviceCategory : Entity<int>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		// Navigation property

		public List<Device> Devices { get; set; } = [];
	}
}