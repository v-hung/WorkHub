using System.Net;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Domain.Enums;

namespace WorkHub.Infrastructure.Services.Requests
{
	public class TimesheetAdjustmentRequestService : BaseRequestService<CreateTimesheetAdjustmentRequestDto>
	{
		private readonly IRequestApprovalService<TimesheetAdjustmentRequest> _approvalService;

		public TimesheetAdjustmentRequestService(RequestServiceDependencies deps, IStringLocalizerFactory localizerFactory, IRequestApprovalService<TimesheetAdjustmentRequest> approvalService) : base(deps, localizerFactory)
		{
			_approvalService = approvalService;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateTimesheetAdjustmentRequestDto request)
		{
			if (!await _approvalService.CanApproveRequestAsync(_deps.CurrentUserService.UserId!, request.ApproverId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			if (_deps.Context.Requests.Any(r => r.UserId == Guid.Parse(_deps.CurrentUserService.UserId!) && r.Date == request.Date && r.Status == RequestStatus.PENDING && r.RequestType == RequestType.TIMESHEET_ADJUSTMENT_REQUEST))
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["You already have a request for this date."]);
			}

			var timesheet = await _deps.TimesheetRepository.GetTimesheetByDate(_deps.CurrentUserService.UserId!, request.Date);

			timesheet ??= await _deps.TimesheetRepository.CreateTimesheetAsync<TimesheetDto>(new Timesheet { Date = request.Date, UserId = Guid.Parse(_deps.CurrentUserService.UserId!) });

			TimesheetAdjustmentRequest timesheetRequest = _deps.Mapper.Map<TimesheetAdjustmentRequest>(request);

			timesheetRequest.TimesheetId = timesheet.Id;
			timesheetRequest.UserId = Guid.Parse(_deps.CurrentUserService.UserId!);

			await _deps.Context.TimesheetAdjustmentRequests.AddAsync(timesheetRequest);
			await _deps.Context.SaveChangesAsync();

			await base.CreateRequestNotification(timesheetRequest);

			return _deps.Mapper.Map<D>(timesheetRequest);
		}
	}
}