using AutoMapper;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Features.Teams.Commands;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Application.Mappings
{
	public class TeamProfile : Profile
	{
		public TeamProfile()
		{
			CreateMap<Team, TeamMinimalDto>().ReverseMap();
			CreateMap<Team, TeamDto>().ReverseMap();
			CreateMap<Team, TeamFullDto>().ReverseMap();
			CreateMap<CreateTeamCommand, Team>().ReverseMap();
		}
	}
}