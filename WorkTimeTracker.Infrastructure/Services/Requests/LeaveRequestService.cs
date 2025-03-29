using System.Net;
using AutoMapper;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Exceptions;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Entities.Requests;
using WorkTimeTracker.Infrastructure.Data;

namespace WorkTimeTracker.Infrastructure.Services.Requests
{
	public class LeaveRequestService : RequestService<CreateLeaveRequestDto>
	{
		private readonly IRequestApprovalService<LeaveRequest> _approvalService;

		public LeaveRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<LeaveRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<LeaveRequest> approvalService)
			: base(context, mapper, localizer, currentUserService)
		{
			_approvalService = approvalService;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateLeaveRequestDto request)
		{

			if (!await _approvalService.CanApproveRequestAsync(request.UserId.ToString(), request.ApprovedById.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			LeaveRequest leaveRequest = _mapper.Map<LeaveRequest>(request);

			await _context.LeaveRequests.AddAsync(leaveRequest);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(leaveRequest);
		}
	}
}