using System.Globalization;
using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Utils;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;
using WorkHub.Infrastructure.Models.Templates.Email;

namespace WorkHub.Infrastructure.Services.Requests
{
	public abstract class RequestService<TCreateRequest> : IRequestService<TCreateRequest> where TCreateRequest : CreateRequestDto
	{
		protected readonly ApplicationDbContext _context;
		protected readonly IMapper _mapper;
		protected readonly IStringLocalizer<RequestService<TCreateRequest>> _localizer;
		protected readonly ICurrentUserService _currentUserService;
		protected readonly IEmailService _emailService;
		protected readonly IHttpContextAccessor _httpContextAccessor;
		protected readonly IEmailBackgroundQueue _emailQueue;

		public RequestService(ApplicationDbContext context, IMapper mapper, IStringLocalizer<RequestService<TCreateRequest>> localizer, ICurrentUserService currentUserService, IEmailService emailService, IHttpContextAccessor httpContextAccessor, IEmailBackgroundQueue emailQueue)
		{
			_context = context;
			_mapper = mapper;
			_localizer = localizer;
			_currentUserService = currentUserService;
			_emailService = emailService;
			_httpContextAccessor = httpContextAccessor;
			_emailQueue = emailQueue;
		}

		public async Task<D> CancelRequestAsync<D>(int requestId) where D : class
		{
			Request request = _context.Requests.Find(requestId) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);
			if (request.UserId != Guid.Parse(_currentUserService.UserId!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to cancel this request."]);
			}

			_context.Requests.Remove(request);

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(request);
		}

		public abstract Task<D> CreateRequestAsync<D>(TCreateRequest request) where D : class;

		protected async Task CreateRequestNotification(Request request)
		{

			var user = await _context.Users.Select(u => new
			{
				u.Id,
				u.Email,
				LanguageCode = u.UserDetail != null ? u.UserDetail.Nationality : Nationality.vi_VN
			}
			).FirstOrDefaultAsync(u => u.Id == request.ApprovedId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Approver not found."]);

			// Create notification
			Notification notification = new()
			{
				Title = _localizer["New Request Submitted"].Value,
				Message = _localizer["You have a new request to approve."].Value,
				Type = NotificationType.REQUEST,
				UserId = request.ApprovedId,
			};
			_context.Notifications.Add(notification);
			await _context.SaveChangesAsync();

			// Send mail
			var originalCulture = CultureInfo.CurrentUICulture;
			CultureInfo.CurrentUICulture = new CultureInfo(user.LanguageCode.ToString().ReplaceUnderscoreToDash());

			try
			{
				var baseUrl = $"{_httpContextAccessor.HttpContext?.Request.Scheme}://{_httpContextAccessor.HttpContext?.Request.Host}";

				RequestSubmittedToApproverTemplate templateModel = new RequestSubmittedToApproverTemplate
				{
					ApproverName = user.Email!,
					RequesterName = _currentUserService.UserName!,
					RequestType = request.RequestType.ToString(),
					SubmittedDate = request.Date.ToString("yyyy/MM/dd"),
					RequestId = request.Id.ToString(),
					RequestLink = $"{baseUrl}/requests/{request.Id}"
				};

				_emailQueue.QueueEmail(async token =>
				{
					await _emailService.SendEmailWithTemplateAsync(
						user.Email!,
						_localizer["New Request Submitted"].Value,
						"RequestSubmittedToApprover",
						templateModel,
						user.LanguageCode);
				});


			}
			finally
			{
				CultureInfo.CurrentUICulture = originalCulture;
			}
		}

	}
}