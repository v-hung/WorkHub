using System.Net;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Timesheets.Commands
{
	public class CheckInCommand : IRequest<TimesheetDto>
	{

	}

	public class CheckInCommandHandler : IRequestHandler<CheckInCommand, TimesheetDto>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public CheckInCommandHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetDto> Handle(CheckInCommand command, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			return await _timesheetRepository.PerformCheckIn<TimesheetDto>(_currentUserService.UserId);

		}

	}
}