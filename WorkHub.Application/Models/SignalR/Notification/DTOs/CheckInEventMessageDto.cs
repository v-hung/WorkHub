namespace WorkHub.Application.Models.SignalR.Notification.DTOs
{
	public class CheckInEventMessageDto
	{
		public string UserId { get; set; } = default!;
		public DateTime CheckInTime { get; set; }
		public string Location { get; set; } = default!;
	}
}