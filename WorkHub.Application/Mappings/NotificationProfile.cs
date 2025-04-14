using AutoMapper;
using WorkHub.Application.DTOs.Misc;
using WorkHub.Domain.Entities.Misc;

namespace WorkHub.Application.Mappings
{
	public class NotificationProfile : Profile
	{
		public NotificationProfile()
		{
			CreateMap<Notification, NotificationDto>().ReverseMap();
		}

	}
}