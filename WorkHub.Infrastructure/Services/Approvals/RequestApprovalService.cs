using AutoMapper;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Approvals
{
	public class RequestApprovalService : BaseRequestApprovalService<Request>
	{
		public RequestApprovalService(ApplicationDbContext context, IStringLocalizerFactory localizerFactory, IMapper mapper, INotificationSender notificationSender, ITimesheetService timesheetService) : base(context, localizerFactory, mapper, notificationSender, timesheetService)
		{
		}
	}
}