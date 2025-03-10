using MediatR;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Queries
{
	public class GetAllTeamQuery : IRequest<Paginated<TeamDto>>
	{
		public PagedRequest _request { get; set; }

		public GetAllTeamQuery(PagedRequest request)
		{
			_request = request;
		}
	}

	public class GetAllTeamQueryHandler : IRequestHandler<GetAllTeamQuery, Paginated<TeamDto>>
	{
		private readonly IRepository<Team, int> _repositoryService;

		public GetAllTeamQueryHandler(IRepository<Team, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<TeamDto>> Handle(GetAllTeamQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<TeamDto>(query._request);
		}
	}
}