using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Commands
{
	public class UpdateWorkScheduleCommand : IRequest<WorkScheduleDetailsDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateWorkScheduleCommand Request { get; set; }
	}

	public class UpdateWorkScheduleCommandHandler : IRequestHandler<UpdateWorkScheduleCommand, WorkScheduleDetailsDto>
	{

		private readonly IRepository<WorkSchedule, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public UpdateWorkScheduleCommandHandler(IRepository<WorkSchedule, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<WorkScheduleDetailsDto> Handle(UpdateWorkScheduleCommand command, CancellationToken cancellationToken)
		{
			var workSchedule = await _repository.GetEntityByIdAsync<WorkSchedule, int>(command.Id);

			_mapper.Map(command.Request, workSchedule);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<WorkScheduleDetailsDto>(workSchedule);
		}
	}
}