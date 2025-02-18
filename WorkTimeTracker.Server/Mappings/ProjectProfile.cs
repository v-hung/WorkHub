using AutoMapper;
using WorkTimeTracker.Server.Dto.Work;
using WorkTimeTracker.Server.Models.Work;

namespace WorkTimeTracker.Server.Mappings
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