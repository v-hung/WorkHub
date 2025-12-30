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
			CreateMap<User, UserReferenceDto>().ReverseMap();
			CreateMap<User, UserWorkScheduleDto>().ForMember(dest => dest.WorkSchedule, opt => opt.NullSubstitute(new WorkSchedule()));
			CreateMap<User, UserDetailsDto>()
				.ForMember(dest => dest.WorkSchedule, opt => opt.NullSubstitute(new WorkSchedule()))
				.ReverseMap();

			CreateMap<User, UserFormDto>().ReverseMap();
			CreateMap<Domain.Entities.Identity.UserProfile, UserProfileDto>().ReverseMap();
			CreateMap<UserCreateUpdateRequest, User>().ReverseMap();
		}
	}
}