using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Domain.Entities.Equipment
{
	[Table("device_categories")]
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