using System.Net;
using AutoMapper;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services.Requests
{
	public class TimesheetRequestService : RequestService<CreateTimesheetRequestDto>
	{
		private readonly IRequestApprovalService<TimesheetRequest> _approvalService;
		private readonly ITimesheetRepository _timesheetRepository;

		public TimesheetRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<TimesheetRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<TimesheetRequest> approvalService, ITimesheetRepository timesheetRepository)
			: base(context, mapper, localizer, currentUserService)
		{
			_approvalService = approvalService;
			_timesheetRepository = timesheetRepository;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateTimesheetRequestDto request)
		{
			var timesheet = await _timesheetRepository.GetTimesheetByDate(_currentUserService.UserId!, request.Date)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Timesheet is not found for this day"]); ;

			if (!await _approvalService.CanApproveRequestAsync(_currentUserService.UserId!, request.ApprovedId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			TimesheetRequest timesheetRequest = _mapper.Map<TimesheetRequest>(request);

			timesheetRequest.TimesheetId = timesheet.Id;
			timesheetRequest.UserId = Guid.Parse(_currentUserService.UserId!);

			await _context.TimesheetRequests.AddAsync(timesheetRequest);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(timesheetRequest);
		}
	}
}