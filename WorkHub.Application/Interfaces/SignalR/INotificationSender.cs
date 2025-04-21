namespace WorkHub.Application.Interfaces.SignalR
{
	public interface INotificationSender
	{
		Task SendToUserAsync(string userId, string message);

		Task SendToUsersAsync(List<string> userIds, string message);
	}
}