using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Localization;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Requests
{
	public class TimesheetAdjustmentRequestService : RequestService<CreateTimesheetAdjustmentRequestDto>
	{
		private readonly IRequestApprovalService<TimesheetAdjustmentRequest> _approvalService;
		private readonly ITimesheetRepository _timesheetRepository;

		public TimesheetAdjustmentRequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<TimesheetAdjustmentRequestService> localizer, ICurrentUserService currentUserService, IRequestApprovalService<TimesheetAdjustmentRequest> approvalService, ITimesheetRepository timesheetRepository, IHttpContextAccessor httpContextAccessor, IEmailService emailService, IEmailBackgroundQueue emailQueue)
			: base(context, mapper, localizer, currentUserService, emailService, httpContextAccessor, emailQueue)
		{
			_approvalService = approvalService;
			_timesheetRepository = timesheetRepository;
		}

		public override async Task<D> CreateRequestAsync<D>(CreateTimesheetAdjustmentRequestDto request)
		{
			if (!await _approvalService.CanApproveRequestAsync(_currentUserService.UserId!, request.ApprovedId.ToString()))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["The specified approver is not authorized to approve this request."]);
			}

			var timesheet = await _timesheetRepository.GetTimesheetByDate(_currentUserService.UserId!, request.Date);

			timesheet ??= await _timesheetRepository.CreateTimesheetAsync<TimesheetDto>(new Timesheet { Date = request.Date, UserId = Guid.Parse(_currentUserService.UserId!) });

			TimesheetAdjustmentRequest timesheetRequest = _mapper.Map<TimesheetAdjustmentRequest>(request);

			timesheetRequest.TimesheetId = timesheet.Id;
			timesheetRequest.UserId = Guid.Parse(_currentUserService.UserId!);

			await _context.TimesheetAdjustmentRequests.AddAsync(timesheetRequest);
			await _context.SaveChangesAsync();

			await base.CreateRequestNotification(timesheetRequest);

			return _mapper.Map<D>(timesheetRequest);
		}
	}
}