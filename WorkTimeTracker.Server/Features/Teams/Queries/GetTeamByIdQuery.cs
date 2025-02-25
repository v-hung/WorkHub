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
		private readonly IRepositoryService<Team, int> _repositoryService;

		public GetTeamByIdQueryHandler(IRepositoryService<Team, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<TeamDto> Handle(GetTeamByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetAsync<TeamDto, int>(query.Id);
		}
	}
}