using AutoMapper;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Features.Equipment.Commands;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Mappings
{
	public class DeviceProfile : Profile
	{
		public DeviceProfile()
		{
			CreateMap<Device, DeviceDetailsDto>().ReverseMap();
			CreateMap<Device, DeviceReferenceDto>().ReverseMap();
			CreateMap<Device, CreateDeviceCommand>().ReverseMap();
			CreateMap<DeviceCategory, DeviceCategoryDetailsDto>().ReverseMap();
			CreateMap<DeviceCategory, DeviceCategoryReferenceDto>().ReverseMap();
			CreateMap<DeviceCategory, CreateDeviceCategoryCommand>().ReverseMap();
		}
	}
}