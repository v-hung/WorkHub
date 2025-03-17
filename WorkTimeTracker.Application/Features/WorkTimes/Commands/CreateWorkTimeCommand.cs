using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Constants.Timesheet;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.WorkTimes.Commands
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

		private readonly IRepository<WorkTime, int> _repositoryService;

		public CreateWorkTimeCommandHandler(IRepository<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<WorkTimeDto> Handle(CreateWorkTimeCommand request, CancellationToken cancellationToken)
		{
			return await _repositoryService.CreateOrUpdateAsync<WorkTimeDto, int>(request);
		}
	}
}