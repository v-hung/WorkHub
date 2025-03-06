using AutoMapper;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Application.Requests.Identity;

namespace WorkTimeTracker.Application.Mappings
{
	public class UserProfile : Profile
	{
		public UserProfile()
		{
			CreateMap<User, UserMinimalDto>().ReverseMap();
			CreateMap<User, UserDto>().ReverseMap();
			CreateMap<User, UserFullDto>().ReverseMap();
			CreateMap<UserDetail, UserDetailDto>().ReverseMap();
			CreateMap<UserCreateUpdateRequest, User>().ReverseMap();
		}
	}
}