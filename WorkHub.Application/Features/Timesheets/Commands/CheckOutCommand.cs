using System.Net;
using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Responses.Time;

namespace WorkHub.Application.Features.Timesheets.Commands
{
	public class CheckOutCommand : IRequest<TimesheetResponse<TimesheetDto>>
	{

	}

	public class CheckOutCommandHandler : IRequestHandler<CheckOutCommand, TimesheetResponse<TimesheetDto>>
	{
		private readonly ITimesheetService _timesheetService;
		private readonly ICurrentUserService _currentUserService;

		public CheckOutCommandHandler(ITimesheetService timesheetService, ICurrentUserService currentUserService)
		{
			_timesheetService = timesheetService;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetResponse<TimesheetDto>> Handle(CheckOutCommand command, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			var timesheet = await _timesheetService.PerformCheckOut(_currentUserService.UserId);

			return new TimesheetResponse<TimesheetDto>
			{
				Timesheet = timesheet
			};

		}

	}
}