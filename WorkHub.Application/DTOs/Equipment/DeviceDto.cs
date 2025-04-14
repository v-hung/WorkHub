using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Equipment
{
	public class DeviceDto : DeviceMinimalDto
	{
		public UserMinimalDto? AssignedUser { get; set; }

		public List<DeviceCategoryMinimalDto> DeviceCategories { get; set; } = [];
	}
}