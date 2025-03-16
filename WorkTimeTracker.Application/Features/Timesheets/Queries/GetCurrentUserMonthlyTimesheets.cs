using System.Net;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;

namespace WorkTimeTracker.Application.Features.Timesheets.Queries
{
	public class GetCurrentUserMonthlyTimesheetsQuery : IRequest<List<TimesheetDto>>
	{
		public int Month { get; set; }
		public int Year { get; set; }
	}

	public class GetCurrentUserMonthlyTimesheetsQueryHandler : IRequestHandler<GetCurrentUserMonthlyTimesheetsQuery, List<TimesheetDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public GetCurrentUserMonthlyTimesheetsQueryHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<List<TimesheetDto>> Handle(GetCurrentUserMonthlyTimesheetsQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			return await _timesheetRepository.GetCurrentUserMonthlyTimesheets<TimesheetDto>(_currentUserService.UserId, query.Month, query.Year);

		}

	}

}