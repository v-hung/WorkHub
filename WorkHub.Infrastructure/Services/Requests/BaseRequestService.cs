using System.Globalization;
using System.Net;
using System.Reflection;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Application.Models.SignalR.Notification;
using WorkHub.Application.Models.SignalR.Notification.DTOs;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;
using WorkHub.Infrastructure.Models.Templates.Email;

namespace WorkHub.Infrastructure.Services.Requests
{
	public record RequestServiceDependencies(
		ApplicationDbContext Context,
		IMapper Mapper,
		ICurrentUserService CurrentUserService,
		IEmailService EmailService,
		IHttpContextAccessor HttpContextAccessor,
		IEmailSenderQueue EmailQueue,
		INotificationSender NotificationSender,
		ITimesheetRepository TimesheetRepository
	);

	public abstract class BaseRequestService<TCreateRequest> : IRequestService<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		protected readonly RequestServiceDependencies _deps;
		protected readonly IStringLocalizer _localizer;

		public BaseRequestService(RequestServiceDependencies deps, IStringLocalizerFactory localizerFactory)
		{
			_deps = deps;
			_localizer = localizerFactory.Create("Services.Requests.RequestService", Assembly.GetExecutingAssembly().GetName().Name ?? "");
		}

		public async Task<D> CancelRequestAsync<D>(int requestId) where D : class
		{
			Request request = _deps.Context.Requests.Find(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);
			if (request.UserId != Guid.Parse(_deps.CurrentUserService.UserId!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to cancel this request."]);
			}

			request.Status = RequestStatus.CANCELED;

			await _deps.Context.SaveChangesAsync();

			return _deps.Mapper.Map<D>(request);
		}

		public abstract Task<D> CreateRequestAsync<D>(TCreateRequest request) where D : class;

		protected async Task CreateRequestNotification(Request request)
		{
			var user = await _deps.Context.Users.Select(u => new
			{
				u.Id,
				u.Email,
				LanguageCode = u.UserDetail != null ? u.UserDetail.Nationality : Nationality.vi_VN
			}
			).FirstOrDefaultAsync(u => u.Id == request.ApprovedId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Approver not found."]);

			var originalCulture = CultureInfo.CurrentUICulture;
			CultureInfo.CurrentUICulture = new CultureInfo(user.LanguageCode.ToString().ReplaceUnderscoreToDash());

			try
			{
				// Create notification
				Notification notification = new()
				{
					Title = _localizer["New Request Submitted"].Value,
					Message = _localizer["You have a new request to approve."].Value,
					Category = NotificationCategory.REQUEST,
					RelatedEntityId = request.Id.ToString(),
					UserId = request.ApprovedId,
				};
				_deps.Context.Notifications.Add(notification);
				await _deps.Context.SaveChangesAsync();

				// Send mail
				var baseUrl = $"{_deps.HttpContextAccessor.HttpContext?.Request.Scheme}://{_deps.HttpContextAccessor.HttpContext?.Request.Host}";

				RequestSubmittedToApproverTemplate templateModel = new RequestSubmittedToApproverTemplate
				{
					ApproverName = user.Email!,
					RequesterName = _deps.CurrentUserService.UserName!,
					RequestType = request.RequestType.ToString(),
					SubmittedDate = request.Date.ToString("yyyy/MM/dd"),
					RequestId = request.Id.ToString(),
					RequestLink = $"{baseUrl}/requests/{request.Id}"
				};

				_deps.EmailQueue.QueueEmail(async token =>
				{
					await _deps.EmailService.SendEmailWithTemplateAsync(
						user.Email!,
						_localizer["New Request Submitted"].Value,
						"RequestSubmittedToApprover",
						templateModel,
						user.LanguageCode);
				});

				await _deps.NotificationSender.SendToUserAsync(request.ApprovedId!.Value.ToString(), new BaseNotificationHubMessage
				{
					Data = new SystemNotificationMessageDto
					{
						Title = notification.Title,
						Body = notification.Message,
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