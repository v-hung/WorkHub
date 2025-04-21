using System.ComponentModel.DataAnnotations;
using System.Net;
using MediatR;
using WorkHub.Application.DTOs.Misc;
using WorkHub.Application.Exceptions;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Misc;

namespace WorkHub.Application.Features.Notifications.Queries
{
	public class CursorSearchNotificationQuery : IRequest<CursorPaginated<NotificationDto>>
	{
		public required CursorPagedRequest Request { get; set; }
	}

	public class CursorSearchNotificationQueryHandler : IRequestHandler<CursorSearchNotificationQuery, CursorPaginated<NotificationDto>>
	{
		private readonly IRepository<Notification, int> _repository;

		private readonly ICurrentUserService _currentUserService;

		public CursorSearchNotificationQueryHandler(IRepository<Notification, int> repository, ICurrentUserService currentUserService)
		{
			_repository = repository;
			_currentUserService = currentUserService;
		}

		public async Task<CursorPaginated<NotificationDto>> Handle(CursorSearchNotificationQuery query, CancellationToken cancellationToken)
		{
			if (_currentUserService.UserId == null)
			{
				throw new BusinessException(HttpStatusCode.BadRequest, "User not found");
			}

			return await _repository.CursorSearchAsync<NotificationDto>(query.Request, v => Guid.Parse(_currentUserService.UserId) == v.UserId);
		}
	}
}