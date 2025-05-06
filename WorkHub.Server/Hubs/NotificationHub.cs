using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using WorkHub.Application.Features.Notifications.Queries;

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
			var data = await _mediator.Send(new GetUnreadCountQuery());

			await Clients.Caller.SendAsync("SendUnReadCount", data);
		}
	}
}