using AutoMapper;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Application.Requests.Identity;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Mappings
{
	public class UserProfile : Profile
	{
		public UserProfile()
		{
			CreateMap<User, UserMinimalDto>().ReverseMap();
			CreateMap<User, UserMinimalWithWorkScheduleDto>().ForMember(dest => dest.WorkSchedule, opt => opt.NullSubstitute(new WorkSchedule()));
			CreateMap<User, UserDto>()
				.ForMember(dest => dest.WorkSchedule, opt => opt.NullSubstitute(new WorkSchedule()))
				.ReverseMap();

			CreateMap<User, UserFullDto>().ReverseMap();
			CreateMap<UserDetail, UserDetailDto>().ReverseMap();
			CreateMap<UserCreateUpdateRequest, User>().ReverseMap();
		}
	}
}