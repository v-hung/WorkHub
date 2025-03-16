using System.Net;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Responses.Time;

namespace WorkTimeTracker.Application.Features.Timesheets.Queries
{
	public class GetTodayTimesheetQuery : IRequest<TimesheetResponse<TimesheetMinimalDto>?>
	{

	}

	public class GetTodayTimesheetQueryHandler : IRequestHandler<GetTodayTimesheetQuery, TimesheetResponse<TimesheetMinimalDto>?>
	{

		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public GetTodayTimesheetQueryHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetResponse<TimesheetMinimalDto>?> Handle(GetTodayTimesheetQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");
			}

			var timesheet = await _timesheetRepository.GetTodayTimesheet<TimesheetMinimalDto>(_currentUserService.UserId);

			return timesheet != null ? new TimesheetResponse<TimesheetMinimalDto>
			{
				Timesheet = timesheet
			} : null;

		}

	}
}