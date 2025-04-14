using AutoMapper;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Features.Devices.Commands;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Mappings
{
	public class DeviceProfile : Profile
	{
		public DeviceProfile()
		{
			CreateMap<Device, DeviceDto>().ReverseMap();
			CreateMap<Device, DeviceMinimalDto>().ReverseMap();
			CreateMap<Device, CreateDeviceCommand>().ReverseMap();
			CreateMap<DeviceCategory, DeviceCategoryDto>().ReverseMap();
			CreateMap<DeviceCategory, DeviceCategoryMinimalDto>().ReverseMap();
			CreateMap<DeviceCategory, CreateDeviceCategoryCommand>().ReverseMap();
		}
	}
}