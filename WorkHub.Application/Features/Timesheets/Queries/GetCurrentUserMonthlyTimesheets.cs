using System.Net;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Exceptions;
using WorkHub.Domain.Repositories;
using WorkHub.Application.Interfaces.Services;
using AutoMapper;

namespace WorkHub.Application.Features.Timesheets.Queries
{
	public class GetCurrentUserMonthlyTimesheetsQuery : IRequest<List<TimesheetDetailsDto>>
	{
		public int Month { get; set; }
		public int Year { get; set; }
	}

	public class GetCurrentUserMonthlyTimesheetsQueryHandler : IRequestHandler<GetCurrentUserMonthlyTimesheetsQuery, List<TimesheetDetailsDto>>
	{
		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;
		private readonly IMapper _mapper;

		public GetCurrentUserMonthlyTimesheetsQueryHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService, IMapper mapper)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
			_mapper = mapper;
		}

		public async Task<List<TimesheetDetailsDto>> Handle(GetCurrentUserMonthlyTimesheetsQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			var timesheets = await _timesheetRepository.GetCurrentUserMonthlyTimesheets(_currentUserService.UserId, query.Month, query.Year);

			return _mapper.Map<List<TimesheetDetailsDto>>(timesheets);

		}

	}

}