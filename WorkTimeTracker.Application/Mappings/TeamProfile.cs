using AutoMapper;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Mappings
{
    public class TeamProfile : Profile
    {
        public TeamProfile()
        {
            CreateMap<Team, TeamMinimalDto>().ReverseMap();
            CreateMap<Team, TeamDto>().ReverseMap();
            CreateMap<Team, TeamFullDto>().ReverseMap();
        }
    }
}