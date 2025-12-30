using System.Net;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Responses.Work;

namespace WorkHub.Application.Features.Timesheets.Commands
{
	public class CheckInCommand : IRequest<TimesheetResponse<TimesheetDetailsDto>>
	{

	}

	public class CheckInCommandHandler : IRequestHandler<CheckInCommand, TimesheetResponse<TimesheetDetailsDto>>
	{
		private readonly ITimesheetService _timesheetService;
		private readonly ICurrentUserService _currentUserService;

		public CheckInCommandHandler(ITimesheetService timesheetService, ICurrentUserService currentUserService)
		{
			_timesheetService = timesheetService;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetResponse<TimesheetDetailsDto>> Handle(CheckInCommand command, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			var timesheet = await _timesheetService.PerformCheckIn(_currentUserService.UserId);

			return new TimesheetResponse<TimesheetDetailsDto>
			{
				Timesheet = timesheet
			};

		}

	}
}