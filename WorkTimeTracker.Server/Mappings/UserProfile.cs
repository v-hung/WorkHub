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
			CreateMap<User, UserDto>().ReverseMap();
			CreateMap<UserCreateUpdateRequest, User>().ReverseMap();
		}
	}
}