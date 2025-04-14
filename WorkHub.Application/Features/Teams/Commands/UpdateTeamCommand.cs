using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Application.Features.Teams.Commands
{
	public class UpdateTeamCommand : IRequest<TeamDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateTeamCommand Request { get; set; }
	}

	public class UpdateTeamCommandHandler : IRequestHandler<UpdateTeamCommand, TeamDto>
	{

		private readonly IRepository<Team, int> _repository;

		public UpdateTeamCommandHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<TeamDto> Handle(UpdateTeamCommand command, CancellationToken cancellationToken)
		{
			return await _repository.UpdateAsync<TeamDto, int>(command.Id, command.Request,
			[
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Members, command.Request.MemberIds, command.Id),
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Projects, command.Request.ProjectIds, command.Id)
			]);
		}
	}
}