using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Constants.Timesheet;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Commands
{
	public class CreateWorkScheduleCommand : IRequest<WorkScheduleDto>
	{
		[Required]
		public string Title { get; set; } = string.Empty;

		public TimeSpan StartTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		public TimeSpan EndTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		public TimeSpan StartTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		public TimeSpan EndTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		public int AllowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;
	}

	public class CreateWorkScheduleCommandHandler : IRequestHandler<CreateWorkScheduleCommand, WorkScheduleDto>
	{

		private readonly IRepository<WorkSchedule, int> _repository;

		public CreateWorkScheduleCommandHandler(IRepository<WorkSchedule, int> repository)
		{
			_repository = repository;
		}

		public async Task<WorkScheduleDto> Handle(CreateWorkScheduleCommand command, CancellationToken cancellationToken)
		{
			return await _repository.CreateAsync<WorkScheduleDto>(command);
		}
	}
}