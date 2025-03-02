using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Constants.Timesheet;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.WorkTimes.Commands
{
	public class CreateEditWorkTimeCommand : IRequest<WorkTimeDto>
	{
		public int Id { get; set; } = default;

		[Required]
		public string Title { get; set; } = string.Empty;

		[Required]
		public TimeSpan StartTimeMorning { get; set; } = TimesheetConst.START_TIME_MORNING;

		[Required]
		public TimeSpan EndTimeMorning { get; set; } = TimesheetConst.END_TIME_MORNING;

		[Required]
		public TimeSpan StartTimeAfternoon { get; set; } = TimesheetConst.START_TIME_AFTERNOON;

		[Required]
		public TimeSpan EndTimeAfternoon { get; set; } = TimesheetConst.END_TIME_AFTERNOON;

		[Required]
		public int AllowedLateMinutes { get; set; } = TimesheetConst.ALLOWED_LATE_MINUTES;
	}

	public class CreateEditWorkTimeCommandHandler : IRequestHandler<CreateEditWorkTimeCommand, WorkTimeDto>
	{

		private readonly IRepositoryService<WorkTime, int> _repositoryService;

		public CreateEditWorkTimeCommandHandler(IRepositoryService<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<WorkTimeDto> Handle(CreateEditWorkTimeCommand request, CancellationToken cancellationToken)
		{
			return await _repositoryService.CreateOrUpdateAsync<WorkTimeDto, int>(request.Id, request);
		}
	}
}