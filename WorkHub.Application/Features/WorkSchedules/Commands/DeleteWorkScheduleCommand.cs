using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;
namespace WorkHub.Application.Features.WorkSchedules.Commands
{
	public class DeleteWorkScheduleCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteWorkScheduleCommandHandler : IRequestHandler<DeleteWorkScheduleCommand, int>
	{
		private readonly IRepository<WorkSchedule, int> _repository;

		public DeleteWorkScheduleCommandHandler(IRepository<WorkSchedule, int> repository)
		{
			_repository = repository;
		}

		public async Task<int> Handle(DeleteWorkScheduleCommand command, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(command.Id);

			return command.Id;
		}
	}
}