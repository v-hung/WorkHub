using AutoMapper;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Features.Devices.Commands;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Mappings
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