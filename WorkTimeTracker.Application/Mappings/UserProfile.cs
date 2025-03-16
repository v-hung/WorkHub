using AutoMapper;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Domain.Entities.Identity;
using WorkTimeTracker.Application.Requests.Identity;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Mappings
{
	public class UserProfile : Profile
	{
		public UserProfile()
		{
			CreateMap<User, UserMinimalDto>().ReverseMap();
			CreateMap<User, UserDto>()
				.ForMember(dest => dest.WorkTime, opt => opt.NullSubstitute(new WorkTime()))
				.ReverseMap();

			CreateMap<User, UserFullDto>().ReverseMap();
			CreateMap<UserDetail, UserDetailDto>().ReverseMap();
			CreateMap<UserCreateUpdateRequest, User>().ReverseMap();
		}
	}
}