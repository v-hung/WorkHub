using MediatR;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Queries
{
	public class GetAllTeamQuery : IRequest<List<TeamDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllTeamQueryHandler : IRequestHandler<GetAllTeamQuery, List<TeamDto>>
	{
		private readonly IRepository<Team, int> _repository;

		public GetAllTeamQueryHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<TeamDto>> Handle(GetAllTeamQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<TeamDto>(v => query.Ids.Contains(v.Id));
		}
	}
}