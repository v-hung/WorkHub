using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;

namespace WorkHub.Application.Features.Timesheets.Queries
{
	public class GetMonthlyTimesheetsQuery : IRequest<List<TimesheetFullDto>>
	{
		public int Month { get; set; }
		public int Year { get; set; }
	}

	public class GetMonthlyTimesheetsQueryHandler : IRequestHandler<GetMonthlyTimesheetsQuery, List<TimesheetFullDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;

		public GetMonthlyTimesheetsQueryHandler(ITimesheetRepository timesheetRepository)
		{
			_timesheetRepository = timesheetRepository;
		}

		public async Task<List<TimesheetFullDto>> Handle(GetMonthlyTimesheetsQuery query, CancellationToken cancellationToken)
		{

			return await _timesheetRepository.GetMonthlyTimesheets(query.Month, query.Year);

		}

	}

}