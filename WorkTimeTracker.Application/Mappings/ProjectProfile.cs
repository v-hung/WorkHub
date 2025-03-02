using AutoMapper;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Mappings
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            CreateMap<Project, ProjectMinimalDto>().ReverseMap();
            CreateMap<Project, ProjectDto>().ReverseMap();
        }
    }
}