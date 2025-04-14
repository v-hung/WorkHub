using System.Net;
using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;

namespace WorkHub.Application.Features.Timesheets.Queries
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

			return await _timesheetRepository.GetCurrentUserMonthlyTimesheets(_currentUserService.UserId, query.Month, query.Year);

		}

	}

}