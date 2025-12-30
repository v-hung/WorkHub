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
			CreateMap<Team, TeamReferenceDto>().ReverseMap();
			CreateMap<Team, TeamDetailsDto>().ReverseMap();
			CreateMap<Team, TeamFormDto>().ReverseMap();
			CreateMap<CreateTeamCommand, Team>().ReverseMap();
		}
	}
}