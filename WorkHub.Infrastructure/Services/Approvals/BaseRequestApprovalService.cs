using System.Globalization;
using System.Net;
using System.Reflection;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Application.Models.SignalR.Notification;
using WorkHub.Application.Models.SignalR.Notification.DTOs;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Approvals
{
	public abstract class BaseRequestApprovalService<TRequest> : IRequestApprovalService<TRequest> where TRequest : Request
	{
		protected readonly ApplicationDbContext _context;
		protected readonly IStringLocalizer _localizer;
		protected readonly IMapper _mapper;
		protected readonly INotificationSender _notificationSender;
		protected readonly ITimesheetService _timesheetService;

		public BaseRequestApprovalService(ApplicationDbContext context, IStringLocalizerFactory localizerFactory, IMapper mapper, INotificationSender notificationSender, ITimesheetService timesheetService)
		{
			_context = context;
			_localizer = localizerFactory.Create("Services.Approvals.RequestApprovalService", Assembly.GetExecutingAssembly().GetName().Name ?? "");
			_mapper = mapper;
			_notificationSender = notificationSender;
			_timesheetService = timesheetService;
		}

		public async Task<bool> CanApproveRequestAsync(string userId, string approverId)
		{
			return await _context.Users
				.AnyAsync(u => u.SupervisorId == Guid.Parse(approverId) && u.Id == Guid.Parse(userId));
		}

		public virtual async Task<D> ApproveRequestAsync<D>(int requestId) where D : class
		{
			TRequest request = await _context.Set<TRequest>().Include(r => r.User)
				.ThenInclude(u => u != null ? u.WorkTime : null)
				.Include(r => r.Approver).FirstOrDefaultAsync(r => r.Id == requestId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await CanApproveRequestAsync(request.UserId.ToString()!, request.ApproverId.ToString()!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to approve this request."]);
			}

			request.Status = RequestStatus.APPROVED;

			var otherRequests = await _context.Set<TRequest>()
				.Where(r => r.UserId == request.UserId && r.Id != request.Id &&
					(r.Status == RequestStatus.PENDING || r.Status == RequestStatus.APPROVED))
				.ToListAsync();

			foreach (var req in otherRequests)
			{
				req.Status = req.Status switch
				{
					RequestStatus.APPROVED => RequestStatus.SUPERSEDED,
					RequestStatus.PENDING => RequestStatus.CANCELED,
					_ => req.Status
				};
			}

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(request);
		}

		public virtual async Task<D> RejectRequestAsync<D>(int requestId) where D : class
		{
			TRequest request = await _context.Set<TRequest>().Include(r => r.User)
				.ThenInclude(u => u != null ? u.WorkTime : null)
				.Include(r => r.Approver).FirstOrDefaultAsync(r => r.Id == requestId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await CanApproveRequestAsync(request.UserId.ToString()!, request.ApproverId.ToString()!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to approve this request."]);
			}

			request.Status = RequestStatus.REJECTED;
			_context.Requests.Update(request);

			await _context.SaveChangesAsync();
			return _mapper.Map<D>(request);
		}

		protected async Task CreateRequestNotification(Request request)
		{
			var user = await _context.Users.Select(u => new
			{
				u.Id,
				u.Email,
				LanguageCode = u.UserDetail != null ? u.UserDetail.Nationality : Nationality.vi_VN
			}
			).FirstOrDefaultAsync(u => u.Id == request.UserId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Approver not found."]);

			var originalCulture = CultureInfo.CurrentUICulture;
			CultureInfo.CurrentUICulture = new CultureInfo(user.LanguageCode.ToString().ReplaceUnderscoreToDash());

			try
			{
				string title;
				string message;

				switch (request.Status)
				{
					case RequestStatus.APPROVED:
						title = _localizer["Request Approved"].Value;
						message = _localizer["Your request has been approved."].Value;
						break;

					case RequestStatus.REJECTED:
						title = _localizer["Request Rejected"].Value;
						message = _localizer["Your request has been rejected."].Value;
						break;

					default:
						return;
				}

				Notification notification = new()
				{
					Title = title,
					Message = message,
					Category = NotificationCategory.REQUEST,
					RelatedEntityId = request.Id.ToString(),
					UserId = request.UserId
				};

				_context.Notifications.Add(notification);
				await _context.SaveChangesAsync();

				await _notificationSender.SendToUserAsync(request.UserId!.Value.ToString(), new BaseNotificationHubMessage
				{
					Data = new SystemNotificationMessageDto
					{
						Title = title,
						Body = message,
					}
				});

			}
			finally
			{
				CultureInfo.CurrentUICulture = originalCulture;
			}


		}
	}
}