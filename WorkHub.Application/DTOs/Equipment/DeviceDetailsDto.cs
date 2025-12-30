using WorkHub.Application.DTOs.Identity;

namespace WorkHub.Application.DTOs.Equipment
{
	public class DeviceDetailsDto : DeviceReferenceDto
	{
		public UserReferenceDto? AssignedUser { get; set; }

		public List<DeviceCategoryReferenceDto> DeviceCategories { get; set; } = [];
	}
}