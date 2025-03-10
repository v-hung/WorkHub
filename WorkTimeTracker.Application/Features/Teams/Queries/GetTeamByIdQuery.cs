using MediatR;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Queries
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
		private readonly IRepository<Team, int> _repositoryService;

		private readonly IStringLocalizer<GetTeamByIdQueryHandler> _localizer;

		public GetTeamByIdQueryHandler(IRepository<Team, int> repositoryService, IStringLocalizer<GetTeamByIdQueryHandler> localizer)
		{
			_repositoryService = repositoryService;
			_localizer = localizer;
		}

		public async Task<TeamDto> Handle(GetTeamByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetByIdAsync<TeamDto, int>(query.Id);
		}
	}
}