using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Time;
namespace WorkTimeTracker.Application.Features.WorkTimes.Commands
{
	public class DeleteWorkTimeCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteWorkTimeCommandHandler : IRequestHandler<DeleteWorkTimeCommand, int>
	{
		private readonly IRepositoryService<WorkTime, int> _repositoryService;

		public DeleteWorkTimeCommandHandler(IRepositoryService<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<int> Handle(DeleteWorkTimeCommand request, CancellationToken cancellationToken)
		{
			await _repositoryService.DeleteAsync(request.Id);

			return request.Id;
		}
	}
}