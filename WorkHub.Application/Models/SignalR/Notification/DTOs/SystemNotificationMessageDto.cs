namespace WorkHub.Application.Models.SignalR.Notification.DTOs
{
	public class SystemNotificationMessageDto
	{
		public required string Title { get; set; }
		public required string Body { get; set; }
		public SystemNotificationMessageSeverity Severity { get; set; } = SystemNotificationMessageSeverity.Info;
	}

	public enum SystemNotificationMessageSeverity
	{
		Info, Warning, Error
	}
}