using MediatR;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Application.Features.Teams.Queries
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