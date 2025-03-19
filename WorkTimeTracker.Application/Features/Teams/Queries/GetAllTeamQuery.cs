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
		public PagedRequest Request { get; set; }

		public GetAllTeamQuery(PagedRequest request)
		{
			Request = request;
		}
	}

	public class GetAllTeamQueryHandler : IRequestHandler<GetAllTeamQuery, Paginated<TeamDto>>
	{
		private readonly IRepository<Team, int> _repository;

		public GetAllTeamQueryHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<TeamDto>> Handle(GetAllTeamQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<TeamDto>(query.Request);
		}
	}
}