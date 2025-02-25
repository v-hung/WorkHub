using MediatR;
using WorkTimeTracker.Server.Dto.Organization;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Models.Organization;
using WorkTimeTracker.Server.Requests;
using WorkTimeTracker.Server.Wrapper;

namespace WorkTimeTracker.Server.Features.Teams.Queries
{
	public class GetAllTeamQuery : IRequest<Paginated<TeamDto>>
	{
		public PagedRequest _request { get; }

		public GetAllTeamQuery(PagedRequest request)
		{
			_request = request;
		}
	}

	public class GetAllTeamQueryHandler : IRequestHandler<GetAllTeamQuery, Paginated<TeamDto>>
	{
		private readonly IRepositoryService<Team, int> _repositoryService;

		public GetAllTeamQueryHandler(IRepositoryService<Team, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<TeamDto>> Handle(GetAllTeamQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<TeamDto>(query._request);
		}
	}
}