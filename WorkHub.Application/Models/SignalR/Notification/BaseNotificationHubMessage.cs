namespace WorkHub.Application.Models.SignalR.Notification
{
	public class BaseNotificationHubMessage
	{
		public NotificationHubMessageType? Type { get; set; } = NotificationHubMessageType.SystemNotification;
		public string? Message { get; set; }
		public object? Data { get; set; }
	}
}