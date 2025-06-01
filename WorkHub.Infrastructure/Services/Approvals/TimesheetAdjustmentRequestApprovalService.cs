using System.Net;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Entities.Time;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Approvals
{
	public class TimesheetAdjustmentRequestApprovalService : BaseRequestApprovalService<TimesheetAdjustmentRequest>
	{

		public TimesheetAdjustmentRequestApprovalService(ApplicationDbContext context, IStringLocalizerFactory localizerFactory, IMapper mapper, INotificationSender notificationSender, ITimesheetService timesheetService) : base(context, localizerFactory, mapper, notificationSender, timesheetService)
		{
		}

		public override async Task<D> ApproveRequestAsync<D>(int requestId) where D : class
		{
			TimesheetAdjustmentRequest request = await base.ApproveRequestAsync<TimesheetAdjustmentRequest>(requestId);

			var workTime = request.User?.WorkTime ?? new WorkTime();

			request.DurationMinutes = (int)TimesheetUtils.CalculateWorkTime(request.CheckIn, request.CheckOut, workTime).TotalMinutes;

			_context.Requests.Update(request);
			await _context.SaveChangesAsync();

			if (request.User?.Id != null)
			{
				await _timesheetService.RecalculateWorkedMinutes(request.User.Id.ToString()!, request.Date);
			}

			await base.CreateRequestNotification(request);

			return _mapper.Map<D>(request);
		}
	}
}