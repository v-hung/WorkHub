using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Time;
namespace WorkHub.Application.Features.WorkTimes.Commands
{
	public class DeleteWorkTimeCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteWorkTimeCommandHandler : IRequestHandler<DeleteWorkTimeCommand, int>
	{
		private readonly IRepository<WorkTime, int> _repository;

		public DeleteWorkTimeCommandHandler(IRepository<WorkTime, int> repository)
		{
			_repository = repository;
		}

		public async Task<int> Handle(DeleteWorkTimeCommand command, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(command.Id);

			return command.Id;
		}
	}
}