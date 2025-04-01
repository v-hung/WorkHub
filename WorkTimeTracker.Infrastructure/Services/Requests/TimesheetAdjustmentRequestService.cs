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
	public class TimesheetAdjustmentRequestService : RequestService<CreateTimesheetAdjustmentRequestDto>
	{
		private readonly IRequestApprovalService<TimesheetAdjustmentRequest> _approvalService;
		private readonly ITimesheetRepository _timesheetRepository;

		public TimesheetAdjustmentRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<TimesheetAdjustmentRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<TimesheetAdjustmentRequest> approvalService, ITimesheetRepository timesheetRepository)
			: base(context, mapper, localizer, currentUserService)
		{
			_approvalService = approvalService;
			_timesheetRepository = timesheetRepository;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateTimesheetAdjustmentRequestDto request)
		{
			var timesheet = await _timesheetRepository.GetTimesheetByDate(_currentUserService.UserId!, request.Date)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Timesheet is not found for this day"]); ;

			if (!await _approvalService.CanApproveRequestAsync(_currentUserService.UserId!, request.ApprovedId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			TimesheetAdjustmentRequest timesheetRequest = _mapper.Map<TimesheetAdjustmentRequest>(request);

			timesheetRequest.TimesheetId = timesheet.Id;
			timesheetRequest.UserId = Guid.Parse(_currentUserService.UserId!);

			await _context.TimesheetAdjustmentRequests.AddAsync(timesheetRequest);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(timesheetRequest);
		}
	}
}