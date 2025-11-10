using System.Net;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Responses.Work;

namespace WorkHub.Application.Features.Timesheets.Queries
{
	public class GetTodayTimesheetQuery : IRequest<TimesheetResponse<TimesheetDto>?>
	{

	}

	public class GetTodayTimesheetQueryHandler : IRequestHandler<GetTodayTimesheetQuery, TimesheetResponse<TimesheetDto>?>
	{

		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public GetTodayTimesheetQueryHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetResponse<TimesheetDto>?> Handle(GetTodayTimesheetQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");
			}

			var timesheet = await _timesheetRepository.GetTodayTimesheet(_currentUserService.UserId);

			return new TimesheetResponse<TimesheetDto>
			{
				Timesheet = timesheet
			};

		}

	}
}