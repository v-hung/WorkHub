using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Domain.Entities.Equipment
{
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