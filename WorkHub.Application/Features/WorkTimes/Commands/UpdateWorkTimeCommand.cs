using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Features.WorkTimes.Commands
{
	public class UpdateWorkTimeCommand : IRequest<WorkTimeDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateWorkTimeCommand Request { get; set; }
	}

	public class UpdateWorkTimeCommandHandler : IRequestHandler<UpdateWorkTimeCommand, WorkTimeDto>
	{

		private readonly IRepository<WorkTime, int> _repository;

		public UpdateWorkTimeCommandHandler(IRepository<WorkTime, int> repository)
		{
			_repository = repository;
		}

		public async Task<WorkTimeDto> Handle(UpdateWorkTimeCommand command, CancellationToken cancellationToken)
		{
			return await _repository.UpdateAsync<WorkTimeDto, int>(command.Id, command.Request);
		}
	}
}