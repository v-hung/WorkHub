using MediatR;
using WorkHub.Application.DTOs.Misc;
using WorkHub.Application.Interfaces.Repositories;
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

		public CursorSearchNotificationQueryHandler(IRepository<Notification, int> repository)
		{
			_repository = repository;
		}

		public async Task<CursorPaginated<NotificationDto>> Handle(CursorSearchNotificationQuery query, CancellationToken cancellationToken)
		{
			return await _repository.CursorSearchAsync<NotificationDto>(query.Request);
		}
	}
}