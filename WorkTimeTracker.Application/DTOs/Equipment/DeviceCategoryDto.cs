namespace WorkTimeTracker.Application.DTOs.Equipment
{
	public class DeviceCategoryDto : DeviceCategoryMinimalDto
	{
		// Navigation property

		public List<DeviceDto> Devices { get; set; } = [];
	}
}