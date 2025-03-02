using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Services;
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
		private readonly IRepositoryService<Project, int> _repositoryService;

		public DeleteProjectCommandHandler(IRepositoryService<Project, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<int> Handle(DeleteProjectCommand request, CancellationToken cancellationToken)
		{
			await _repositoryService.DeleteAsync(request.Id);

			return request.Id;
		}
	}
}