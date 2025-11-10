using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Commands
{
	public class UpdateWorkScheduleCommand : IRequest<WorkScheduleDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateWorkScheduleCommand Request { get; set; }
	}

	public class UpdateWorkScheduleCommandHandler : IRequestHandler<UpdateWorkScheduleCommand, WorkScheduleDto>
	{

		private readonly IRepository<WorkSchedule, int> _repository;

		public UpdateWorkScheduleCommandHandler(IRepository<WorkSchedule, int> repository)
		{
			_repository = repository;
		}

		public async Task<WorkScheduleDto> Handle(UpdateWorkScheduleCommand command, CancellationToken cancellationToken)
		{
			return await _repository.UpdateAsync<WorkScheduleDto, int>(command.Id, command.Request);
		}
	}
}