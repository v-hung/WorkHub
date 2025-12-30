using MediatR;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Application.Features.Teams.Queries
{
	public class GetTeamByIdQuery : IRequest<TeamFormDto>
	{
		public int Id;

		public GetTeamByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetTeamByIdQueryHandler : IRequestHandler<GetTeamByIdQuery, TeamFormDto>
	{
		private readonly IRepository<Team, int> _repository;

		public GetTeamByIdQueryHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<TeamFormDto> Handle(GetTeamByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetByIdAsync<TeamFormDto, int>(query.Id);
		}
	}
}