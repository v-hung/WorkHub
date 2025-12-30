using System.Net;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Responses.Work;
using WorkHub.Domain.Repositories;

namespace WorkHub.Application.Features.Timesheets.Queries
{
	public class GetTodayTimesheetQuery : IRequest<TimesheetResponse<TimesheetDetailsDto>?>
	{

	}

	public class GetTodayTimesheetQueryHandler : IRequestHandler<GetTodayTimesheetQuery, TimesheetResponse<TimesheetDetailsDto>?>
	{

		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;
		private readonly IMapper _mapper;

		public GetTodayTimesheetQueryHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService, IMapper mapper)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
			_mapper = mapper;
		}

		public async Task<TimesheetResponse<TimesheetDetailsDto>?> Handle(GetTodayTimesheetQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.Unauthorized, "Unauthorized");
			}

			var timesheet = await _timesheetRepository.GetTodayTimesheet(_currentUserService.UserId);

			return new TimesheetResponse<TimesheetDetailsDto>
			{
				Timesheet = _mapper.Map<TimesheetDetailsDto>(timesheet)
			};

		}

	}
}