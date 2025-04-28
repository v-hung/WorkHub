using Microsoft.AspNetCore.SignalR;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Application.Models.SignalR.Notification;
using WorkHub.Server.Hubs;

namespace WorkHub.Server.SignalR
{
	public class NotificationSender : INotificationSender
	{
		private readonly IHubContext<NotificationHub> _hubContext;

		public NotificationSender(IHubContext<NotificationHub> hubContext)
		{
			_hubContext = hubContext;
		}

		public async Task SendToUserAsync(string userId, BaseNotificationHubMessage message)
		{
			await _hubContext.Clients.User(userId).SendAsync("ReceiveMessage", message);
		}

		public async Task SendToUsersAsync(List<string> userIds, BaseNotificationHubMessage message)
		{
			await _hubContext.Clients.Users(userIds).SendAsync("ReceiveMessage", message);
		}

		public async Task SendToAllUsersAsync(BaseNotificationHubMessage message)
		{
			await _hubContext.Clients.All.SendAsync("ReceiveMessage", message);
		}

	}
}