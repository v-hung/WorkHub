using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Constants.Timesheet;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Features.WorkTimes.Commands
{
	public class CreateWorkTimeCommand : IRequest<WorkTimeDto>
	{
		[Required]
		public string Title { get; set; } = string.Empty;

		public TimeSpan StartTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		public TimeSpan EndTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		public TimeSpan StartTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		public TimeSpan EndTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		public int AllowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;
	}

	public class CreateWorkTimeCommandHandler : IRequestHandler<CreateWorkTimeCommand, WorkTimeDto>
	{

		private readonly IRepository<WorkTime, int> _repository;

		public CreateWorkTimeCommandHandler(IRepository<WorkTime, int> repository)
		{
			_repository = repository;
		}

		public async Task<WorkTimeDto> Handle(CreateWorkTimeCommand command, CancellationToken cancellationToken)
		{
			return await _repository.CreateAsync<WorkTimeDto>(command);
		}
	}
}