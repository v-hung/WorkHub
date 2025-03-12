using System.Net;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Timesheets.Commands
{
	public class CheckOutCommand : IRequest<TimesheetDto>
	{

	}

	public class CheckOutCommandHandler : IRequestHandler<CheckOutCommand, TimesheetDto>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public CheckOutCommandHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetDto> Handle(CheckOutCommand command, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			return await _timesheetRepository.PerformCheckOut<TimesheetDto>(_currentUserService.UserId);

		}

	}
}