using System.Net;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Work;
using WorkHub.Domain.Enums;

namespace WorkHub.Infrastructure.Services.Requests
{
	public class LeaveRequestService : BaseRequestService<CreateLeaveRequestDto>
	{
		private readonly IRequestApprovalService<LeaveRequest> _approvalService;

		public LeaveRequestService(RequestServiceDependencies deps, IStringLocalizerFactory localizerFactory, IRequestApprovalService<LeaveRequest> approvalService)
			: base(deps, localizerFactory)
		{
			_approvalService = approvalService;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateLeaveRequestDto request)
		{
			if (!await _approvalService.CanApproveRequestAsync(_deps.CurrentUserService.UserId!, request.ApproverId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			if (_deps.Context.Requests.Any(r => r.UserId == Guid.Parse(_deps.CurrentUserService.UserId!) && r.Date == request.Date && r.Status == RequestStatus.PENDING && r.RequestType == RequestType.LEAVE_REQUEST))
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["You already have a request for this date."]);
			}

			var timesheet = await _deps.TimesheetRepository.GetTimesheetByDate(_deps.CurrentUserService.UserId!, request.Date);

			timesheet ??= await _deps.TimesheetRepository.CreateTimesheetAsync<TimesheetDto>(new Timesheet { Date = request.Date, UserId = Guid.Parse(_deps.CurrentUserService.UserId!) });

			LeaveRequest leaveRequest = _deps.Mapper.Map<LeaveRequest>(request);

			leaveRequest.TimesheetId = timesheet.Id;
			leaveRequest.UserId = Guid.Parse(_deps.CurrentUserService.UserId!);

			await _deps.Context.LeaveRequests.AddAsync(leaveRequest);
			await _deps.Context.SaveChangesAsync();

			await base.CreateRequestNotification(leaveRequest);

			return _deps.Mapper.Map<D>(leaveRequest);
		}
	}
}