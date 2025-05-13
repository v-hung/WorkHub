using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using WorkHub.Application.Features.Notifications.Queries;
using WorkHub.Application.Models.SignalR.Notification;
using WorkHub.Application.Models.SignalR.Notification.DTOs;

namespace WorkHub.Server.Hubs
{
	public class NotificationHub : Hub
	{

		private readonly IMediator _mediator;

		public NotificationHub(IMediator mediator)
		{
			_mediator = mediator;
		}

		[Authorize]
		public async Task RequestUnReadCount()
		{
			var count = await _mediator.Send(new GetUnreadCountQuery());

			await Clients.Caller.SendAsync("ReceiveMessage", new BaseNotificationHubMessage
			{
				Type = NotificationHubMessageType.UnreadNotificationCount,
				Data = new UnreadNotificationCountMessageDto { Count = count }
			});
		}
	}
}