using System.Net;
using System.Reflection;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Domain.Enums;
using WorkHub.Infrastructure.Data;

namespace WorkHub.Infrastructure.Services.Approvals
{
	public abstract class RequestApprovalService<TRequest> : IRequestApprovalService<TRequest> where TRequest : Request
	{
		protected readonly ApplicationDbContext _context;
		protected readonly IStringLocalizer _localizer;
		protected readonly IMapper _mapper;

		public RequestApprovalService(ApplicationDbContext context, IStringLocalizerFactory localizerFactory, IMapper mapper)
		{
			_context = context;
			_localizer = localizerFactory.Create("Repositories.Repository", Assembly.GetExecutingAssembly().GetName().Name ?? ""); ;
			_mapper = mapper;
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
				.Include(r => r.Approved).FirstOrDefaultAsync(r => r.Id == requestId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await CanApproveRequestAsync(request.UserId.ToString()!, request.ApprovedId.ToString()!))
			{
				throw new BusinessException(HttpStatusCode.Forbidden, _localizer["You are not allowed to approve this request."]);
			}

			request.Status = RequestStatus.APPROVED;
			_context.Requests.Update(request);

			await _context.SaveChangesAsync();
			return _mapper.Map<D>(request);
		}

		public virtual async Task<D> RejectRequestAsync<D>(int requestId) where D : class
		{
			TRequest request = await _context.Set<TRequest>().Include(r => r.User)
				.ThenInclude(u => u != null ? u.WorkTime : null)
				.Include(r => r.Approved).FirstOrDefaultAsync(r => r.Id == requestId)
				?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["Request not found."]);

			if (!await CanApproveRequestAsync(request.UserId.ToString()!, request.ApprovedId.ToString()!))
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
					return; // or throw new Exception("Unknown status");
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

			// await _notificationSender.SendToUserAsync(request.UserId.Value.ToString(), new BaseNotificationHubMessage
			// 		{
			// 			Data = new CheckInEventMessageDto
			// 			{
			// 				UserId = userId.Value.ToString(),
			// 				CheckInTime = exitingTimesheet.StartTime ?? DateTime.UtcNow
			// 			}
			// 		});
		}
	}
}