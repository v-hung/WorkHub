using System.Net;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Responses.Time;

namespace WorkTimeTracker.Application.Features.Timesheets.Commands
{
	public class CheckOutCommand : IRequest<TimesheetResponse<TimesheetMinimalDto>>
	{

	}

	public class CheckOutCommandHandler : IRequestHandler<CheckOutCommand, TimesheetResponse<TimesheetMinimalDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public CheckOutCommandHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetResponse<TimesheetMinimalDto>> Handle(CheckOutCommand command, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			var timesheet = await _timesheetRepository.PerformCheckOut<TimesheetDto>(_currentUserService.UserId);

			return new TimesheetResponse<TimesheetMinimalDto>
			{
				Timesheet = timesheet
			};

		}

	}
}