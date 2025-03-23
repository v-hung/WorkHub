using WorkTimeTracker.Application.DTOs.Identity;

namespace WorkTimeTracker.Application.DTOs.Equipment
{
	public class DeviceDto : DeviceMinimalDto
	{
		public UserMinimalDto? AssignedUser { get; set; }

		public List<DeviceCategoryMinimalDto> DeviceCategories { get; set; } = [];
	}
}