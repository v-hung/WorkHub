using MediatR;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Queries
{
	public class SearchTeamQuery : IRequest<Paginated<TeamDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchTeamQueryHandler : IRequestHandler<SearchTeamQuery, Paginated<TeamDto>>
	{
		private readonly IRepository<Team, int> _repository;

		public SearchTeamQueryHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<TeamDto>> Handle(SearchTeamQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<TeamDto, int>(query.Request);
		}
	}
}