using AutoMapper;
using WorkTimeTracker.Server.Dto.User;
using WorkTimeTracker.Server.Models.Identity;
using WorkTimeTracker.Server.Requests.Identity;

namespace WorkTimeTracker.Server.Mappings
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