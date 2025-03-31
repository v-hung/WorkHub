using System.Net;
using AutoMapper;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Features.Requests.DTOs;
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

		public LeaveRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<LeaveRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<LeaveRequest> approvalService, ITimesheetRepository timesheetRepository)
			: base(context, mapper, localizer, currentUserService)
		{
			_approvalService = approvalService;
			_timesheetRepository = timesheetRepository;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateLeaveRequestDto request)
		{
			var timesheet = await _timesheetRepository.GetTimesheetByDate(_currentUserService.UserId!, request.Date)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Timesheet is not found for this day"]);

			if (!await _approvalService.CanApproveRequestAsync(_currentUserService.UserId!, request.ApprovedId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			LeaveRequest leaveRequest = _mapper.Map<LeaveRequest>(request);

			leaveRequest.TimesheetId = timesheet.Id;
			leaveRequest.UserId = Guid.Parse(_currentUserService.UserId!);

			await _context.LeaveRequests.AddAsync(leaveRequest);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(leaveRequest);
		}
	}
}