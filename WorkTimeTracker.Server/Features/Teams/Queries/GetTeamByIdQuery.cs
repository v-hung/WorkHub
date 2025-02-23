using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Models.Organization;

namespace WorkTimeTracker.Server.Features.Teams.Queries
{
	public class GetTeamByIdQuery : IRequest<TeamDto>
	{
		public int Id;

		public GetTeamByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetTeamByIdQueryHandler : IRequestHandler<GetTeamByIdQuery, TeamDto>
	{
		private readonly IRepositoryService<Team> _repositoryService;

		public GetTeamByIdQueryHandler(IRepositoryService<Team> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<TeamDto> Handle(GetTeamByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetAsync<TeamDto, int>(query.Id);
		}
	}
}