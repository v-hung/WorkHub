using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Constants.Timesheet;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Commands
{
	public class CreateWorkScheduleCommand : IRequest<WorkScheduleDetailsDto>
	{
		[Required]
		public string Title { get; set; } = string.Empty;

		public TimeSpan StartTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		public TimeSpan EndTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		public TimeSpan StartTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		public TimeSpan EndTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		public int AllowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;
	}

	public class CreateWorkScheduleCommandHandler : IRequestHandler<CreateWorkScheduleCommand, WorkScheduleDetailsDto>
	{

		private readonly IRepository<WorkSchedule, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public CreateWorkScheduleCommandHandler(IRepository<WorkSchedule, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<WorkScheduleDetailsDto> Handle(CreateWorkScheduleCommand command, CancellationToken cancellationToken)
		{
			var entity = _mapper.Map<WorkSchedule>(command);

			await _repository.AddAsync(entity);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<WorkScheduleDetailsDto>(entity);
		}
	}
}