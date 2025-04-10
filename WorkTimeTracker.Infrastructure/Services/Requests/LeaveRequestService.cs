using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Messaging;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Domain.Entities.Time;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services.Requests
{
	public class LeaveRequestService : RequestService<CreateLeaveRequestDto>
	{
		private readonly IRequestApprovalService<LeaveRequest> _approvalService;
		private readonly ITimesheetRepository _timesheetRepository;

		public LeaveRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<LeaveRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<LeaveRequest> approvalService, ITimesheetRepository timesheetRepository, IEmailService emailService, IHttpContextAccessor httpContextAccessor, IEmailBackgroundQueue emailQueue)
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