using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Wrapper;

namespace WorkHub.Application.Features.Timesheets.Queries
{
	public class GetMonthlyTimesheetsQuery : IRequest<Paginated<TimesheetFullDto>>
	{
		public int Month { get; set; }
		public int Year { get; set; }
		public int PageNumber { get; set; }
		public int PageSize { get; set; }
		public List<Guid> Ids { get; set; } = [];
	}

	public class GetMonthlyTimesheetsQueryHandler : IRequestHandler<GetMonthlyTimesheetsQuery, Paginated<TimesheetFullDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;

		public GetMonthlyTimesheetsQueryHandler(ITimesheetRepository timesheetRepository)
		{
			_timesheetRepository = timesheetRepository;
		}

		public async Task<Paginated<TimesheetFullDto>> Handle(GetMonthlyTimesheetsQuery query, CancellationToken cancellationToken)
		{

			return await _timesheetRepository.GetMonthlyTimesheets(query.Month, query.Year, query.PageNumber, query.PageSize, query.Ids);

		}

	}

}