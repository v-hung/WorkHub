using WorkHub.Application.Models.SignalR.Notification;

namespace WorkHub.Application.Interfaces.SignalR
{
	public interface INotificationSender
	{
		Task SendToUserAsync(string userId, BaseNotificationHubMessage message);

		Task SendToUsersAsync(List<string> userIds, BaseNotificationHubMessage message);

		Task SendToAllUsersAsync(BaseNotificationHubMessage message);
	}
}