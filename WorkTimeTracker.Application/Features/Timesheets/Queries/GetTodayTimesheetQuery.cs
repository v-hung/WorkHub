using MediatR;
using Microsoft.EntityFrameworkCore;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.Timesheets.Queries
{
	public class GetTodayTimesheetQuery : IRequest<TimesheetDto>
	{

	}

	public class GetTodayTimesheetQueryHandler : IRequestHandler<GetTodayTimesheetQuery, TimesheetDto>
	{

		private readonly ITimesheetRepository _timesheetRepository;
		private readonly ICurrentUserService _currentUserService;

		public GetTodayTimesheetQueryHandler(ITimesheetRepository timesheetRepository, ICurrentUserService currentUserService)
		{
			_timesheetRepository = timesheetRepository;
			_currentUserService = currentUserService;
		}

		public async Task<TimesheetDto> Handle(GetTodayTimesheetQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == Guid.Empty)
			{
				BusinessException(HttpStatusCode.BadRequest, "User not found");
			}
			return await _timesheetRepository.GetTodayTimesheet<TimesheetDto>(_currentUserService.UserId);

		}

	}
}