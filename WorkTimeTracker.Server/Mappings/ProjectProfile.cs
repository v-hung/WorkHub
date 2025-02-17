using AutoMapper;
using WorkTimeTracker.Server.Dto.Work;
using WorkTimeTracker.Server.Models.Work;

namespace WorkTimeTracker.Server.Mappings
{
	public class ProjectProfile : Profile
	{
		public ProjectProfile()
		{
			CreateMap<Project, ProjectDto>().ReverseMap();
		}
	}
}