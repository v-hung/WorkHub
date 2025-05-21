using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Enums;

namespace WorkHub.Domain.Entities.Equipment
{
	[Table("devices")]
	public class Device : AuditEntity<int>
	{
		[Required]
		[StringLength(255)]
		public required string Name { get; set; }

		[StringLength(255)]
		public string? Description { get; set; }

		[StringLength(255)]
		public string? Location { get; set; }

		public DeviceStatus Status { get; set; } = DeviceStatus.NEW;

		// Navigation property

		[ForeignKey("AssignedUser")]
		public Guid? AssignedUserId { get; set; }

		public User? AssignedUser { get; set; }

		public List<DeviceCategory> DeviceCategories { get; set; } = [];
	}
}