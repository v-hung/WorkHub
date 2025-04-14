using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.Projects.Commands
{
	public class DeleteProjectCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteProjectCommandHandler : IRequestHandler<DeleteProjectCommand, int>
	{
		private readonly IRepository<Project, int> _repository;

		public DeleteProjectCommandHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<int> Handle(DeleteProjectCommand command, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(command.Id);

			return command.Id;
		}
	}
}