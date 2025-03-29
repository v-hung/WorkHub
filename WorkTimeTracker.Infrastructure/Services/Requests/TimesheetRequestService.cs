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
	public class TimesheetRequestService : RequestService<CreateTimesheetRequestDto>
	{
		private readonly IRequestApprovalService<TimesheetRequest> _approvalService;

		public TimesheetRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<TimesheetRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<TimesheetRequest> approvalService)
			: base(context, mapper, localizer, currentUserService)
		{
			_approvalService = approvalService;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateTimesheetRequestDto request)
		{
			if (!await _approvalService.CanApproveRequestAsync(request.UserId.ToString(), request.ApprovedById.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			TimesheetRequest timesheetRequest = _mapper.Map<TimesheetRequest>(request);

			await _context.TimesheetRequests.AddAsync(timesheetRequest);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(timesheetRequest);
		}
	}
}