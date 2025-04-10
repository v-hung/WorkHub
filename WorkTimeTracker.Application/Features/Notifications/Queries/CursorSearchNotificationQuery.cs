using MediatR;
using WorkTimeTracker.Application.DTOs.Misc;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Misc;

namespace WorkTimeTracker.Application.Features.Notifications.Queries
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