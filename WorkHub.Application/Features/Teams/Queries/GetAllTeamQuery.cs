using MediatR;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Application.Features.Teams.Queries
{
	public class GetAllTeamQuery : IRequest<List<TeamDetailsDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllTeamQueryHandler : IRequestHandler<GetAllTeamQuery, List<TeamDetailsDto>>
	{
		private readonly IRepository<Team, int> _repository;

		public GetAllTeamQueryHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<TeamDetailsDto>> Handle(GetAllTeamQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<TeamDetailsDto>(v => query.Ids.Contains(v.Id));
		}
	}
}