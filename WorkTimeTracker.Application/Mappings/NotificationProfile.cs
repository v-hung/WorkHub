using AutoMapper;
using WorkTimeTracker.Application.DTOs.Misc;
using WorkTimeTracker.Domain.Entities.Misc;

namespace WorkTimeTracker.Application.Mappings
{
	public class NotificationProfile : Profile
	{
		public NotificationProfile()
		{
			CreateMap<Notification, NotificationDto>().ReverseMap();
		}

	}
}