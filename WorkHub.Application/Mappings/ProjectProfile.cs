using AutoMapper;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Features.Projects.Commands;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Mappings
{
	public class ProjectProfile : Profile
	{
		public ProjectProfile()
		{
			CreateMap<Project, ProjectReferenceDto>().ReverseMap();
			CreateMap<Project, ProjectDetailsDto>().ReverseMap();
			CreateMap<CreateProjectCommand, Project>().ReverseMap();
		}
	}
}