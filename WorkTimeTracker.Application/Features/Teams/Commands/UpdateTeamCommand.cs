using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Organization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Commands
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
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Members, command.Request.MemberIds),
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Projects, command.Request.ProjectIds)
			]);
		}
	}
}