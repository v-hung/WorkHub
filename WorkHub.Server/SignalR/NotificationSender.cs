using Microsoft.AspNetCore.SignalR;
using WorkHub.Application.Interfaces.SignalR;
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

		public async Task SendToUserAsync(string userId, string message)
		{
			await _hubContext.Clients.User(userId).SendAsync("NotificationReceived", message);
		}

		public async Task SendToUsersAsync(List<string> userIds, string message)
		{
			await _hubContext.Clients.Users(userIds).SendAsync("NotificationReceived", message);
		}

	}
}