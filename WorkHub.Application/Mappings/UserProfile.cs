using AutoMapper;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Application.Requests.Identity;
using WorkHub.Application.DTOs.Time;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Mappings
{
	public class UserProfile : Profile
	{
		public UserProfile()
		{
			CreateMap<User, UserMinimalDto>().ReverseMap();
			CreateMap<User, UserMinimalWithWorkTimeDto>().ForMember(dest => dest.WorkTime, opt => opt.NullSubstitute(new WorkTime()));
			CreateMap<User, UserDto>()
				.ForMember(dest => dest.WorkTime, opt => opt.NullSubstitute(new WorkTime()))
				.ReverseMap();

			CreateMap<User, UserFullDto>().ReverseMap();
			CreateMap<UserDetail, UserDetailDto>().ReverseMap();
			CreateMap<UserCreateUpdateRequest, User>().ReverseMap();
		}
	}
}