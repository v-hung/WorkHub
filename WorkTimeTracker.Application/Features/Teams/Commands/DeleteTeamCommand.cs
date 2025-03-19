using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Organization;

namespace WorkTimeTracker.Application.Features.Teams.Commands
{
	public class DeleteTeamCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteTeamCommandHandler : IRequestHandler<DeleteTeamCommand, int>
	{
		private readonly IRepository<Team, int> _repository;

		public DeleteTeamCommandHandler(IRepository<Team, int> repository)
		{
			_repository = repository;
		}

		public async Task<int> Handle(DeleteTeamCommand command, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(command.Id);

			return command.Id;
		}
	}
}