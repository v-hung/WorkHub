using System.ComponentModel.DataAnnotations;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Domain.Entities.Equipment
{
	public class DeviceCategory : Entity<int>
	{
		[Required]
		[StringLength(255)]
		public required string Name { get; set; }

		[StringLength(255)]
		public string? Description { get; set; }

		// Navigation property

		public List<Device> Devices { get; set; } = [];
	}
}