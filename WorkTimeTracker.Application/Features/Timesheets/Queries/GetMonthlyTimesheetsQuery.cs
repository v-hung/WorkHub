using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;

namespace WorkTimeTracker.Application.Features.Timesheets.Queries
{
	public class GetMonthlyTimesheetsQuery : IRequest<List<TimesheetDto>>
	{
		public int Month { get; set; }
		public int Year { get; set; }
	}

	public class GetMonthlyTimesheetsQueryHandler : IRequestHandler<GetMonthlyTimesheetsQuery, List<TimesheetDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;

		public GetMonthlyTimesheetsQueryHandler(ITimesheetRepository timesheetRepository)
		{
			_timesheetRepository = timesheetRepository;
		}

		public async Task<List<TimesheetDto>> Handle(GetMonthlyTimesheetsQuery query, CancellationToken cancellationToken)
		{

			return await _timesheetRepository.GetMonthlyTimesheets<TimesheetDto>(query.Month, query.Year);

		}

	}

}