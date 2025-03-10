using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Features.Projects.Commands
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

		public async Task<int> Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(request.Id);

			return request.Id;
		}
	}
}