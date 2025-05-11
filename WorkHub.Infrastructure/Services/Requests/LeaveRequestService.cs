using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Requests
{
	public class LeaveRequestService : RequestService<CreateLeaveRequestDto>
	{
		private readonly IRequestApprovalService<LeaveRequest> _approvalService;
		private readonly ITimesheetRepository _timesheetRepository;

		public LeaveRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<LeaveRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<LeaveRequest> approvalService, ITimesheetRepository timesheetRepository, IEmailService emailService, IHttpContextAccessor httpContextAccessor, IEmailSenderQueue emailQueue)
			: base(context, mapper, localizer, currentUserService, emailService, httpContextAccessor, emailQueue)
		{
			_approvalService = approvalService;
			_timesheetRepository = timesheetRepository;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateLeaveRequestDto request)
		{
			if (!await _approvalService.CanApproveRequestAsync(_currentUserService.UserId!, request.ApprovedId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			if (_context.Requests.Any(r => r.UserId == Guid.Parse(_currentUserService.UserId!) && r.Date == request.Date && r.Status == RequestStatus.PENDING && r.RequestType == RequestType.LEAVE_REQUEST))
			{
				throw new BusinessException(HttpStatusCode.Conflict, _localizer["You already have a request for this date."]);
			}

			var timesheet = await _timesheetRepository.GetTimesheetByDate(_currentUserService.UserId!, request.Date);

			timesheet ??= await _timesheetRepository.CreateTimesheetAsync<TimesheetDto>(new Timesheet { Date = request.Date, UserId = Guid.Parse(_currentUserService.UserId!) });

			LeaveRequest leaveRequest = _mapper.Map<LeaveRequest>(request);

			leaveRequest.TimesheetId = timesheet.Id;
			leaveRequest.UserId = Guid.Parse(_currentUserService.UserId!);

			await _context.LeaveRequests.AddAsync(leaveRequest);
			await _context.SaveChangesAsync();

			await base.CreateRequestNotification(leaveRequest);

			return _mapper.Map<D>(leaveRequest);
		}
	}
}