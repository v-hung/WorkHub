namespace WorkHub.Application.DTOs.Equipment
{
	public class DeviceCategoryDetailsDto : DeviceCategoryReferenceDto
	{
		public List<DeviceReferenceDto> Devices { get; set; } = [];
	}
}