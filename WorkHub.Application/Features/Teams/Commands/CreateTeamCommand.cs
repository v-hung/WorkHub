using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Organization;

namespace WorkHub.Application.Features.Teams.Commands
{
	public class CreateTeamCommand : IRequest<TeamDto>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public int TotalMembers { get; set; } = 0;

		public int CompletedProjects { get; set; } = 0;

		public int ActiveProjects { get; set; } = 0;

		// Navigation properties

		public Guid? ManagerId { get; set; }

		public IList<Guid> MemberIds { get; set; } = [];

		public List<int> ProjectIds { get; set; } = [];
	}

	public class CreateTeamCommandHandler : IRequestHandler<CreateTeamCommand, TeamDto>
	{

		private readonly IRepository<Team, int> _repository;

		public CreateTeamCommandHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<TeamDto> Handle(CreateTeamCommand command, CancellationToken cancellationToken)
		{
			return await _repository.CreateAsync<TeamDto>(command,
			[
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Members, command.MemberIds),
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Projects, command.ProjectIds)
			]);
		}
	}
}