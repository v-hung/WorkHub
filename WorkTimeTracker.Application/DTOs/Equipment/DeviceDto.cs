using WorkTimeTracker.Application.DTOs.Identity;

namespace WorkTimeTracker.Application.DTOs.Equipment
{
	public class DeviceDto : DeviceMinimalDto
	{
		// Navigation property

		public UserMinimalDto? AssignedUserId { get; set; }

		public List<DeviceCategoryMinimalDto> DeviceCategories { get; set; } = [];
	}
}