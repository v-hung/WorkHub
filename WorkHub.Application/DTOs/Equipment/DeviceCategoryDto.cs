namespace WorkHub.Application.DTOs.Equipment
{
	public class DeviceCategoryDto : DeviceCategoryMinimalDto
	{
		public List<DeviceMinimalDto> Devices { get; set; } = [];
	}
}