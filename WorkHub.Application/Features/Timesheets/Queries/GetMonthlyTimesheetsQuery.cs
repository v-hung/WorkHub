using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Repositories;

namespace WorkHub.Application.Features.Timesheets.Queries
{
	public class GetMonthlyTimesheetsQuery : IRequest<Paginated<TimesheetDetailsDto>>
	{
		public int Month { get; set; }
		public int Year { get; set; }
		public int PageNumber { get; set; }
		public int PageSize { get; set; }
		public List<Guid> Ids { get; set; } = [];
	}

	public class GetMonthlyTimesheetsQueryHandler : IRequestHandler<GetMonthlyTimesheetsQuery, Paginated<TimesheetDetailsDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly IMapper _mapper;

		public GetMonthlyTimesheetsQueryHandler(ITimesheetRepository timesheetRepository, IMapper mapper)
		{
			_timesheetRepository = timesheetRepository;
			_mapper = mapper;
		}

		public async Task<Paginated<TimesheetDetailsDto>> Handle(GetMonthlyTimesheetsQuery query, CancellationToken cancellationToken)
		{

			var (timesheets, total) = await _timesheetRepository.GetMonthlyTimesheets(query.Month, query.Year, query.PageNumber, query.PageSize, query.Ids);

			return new Paginated<TimesheetDetailsDto>(
				_mapper.Map<List<TimesheetDetailsDto>>(timesheets),
				total,
				query.PageSize,
				query.PageNumber
			);

		}

	}

}