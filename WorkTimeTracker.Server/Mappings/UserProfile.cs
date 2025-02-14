using AutoMapper;
using Timesheet.Server.Dto;
using Timesheet.Server.Models.Identity;

namespace Timesheet.Server.Mappings
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<UserDto, User>().ReverseMap();
        }
    }
}