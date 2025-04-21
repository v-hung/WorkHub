using MediatR;
using WorkHub.Application.Interfaces.SignalR;

namespace WorkHub.Application.Features.Notifications.Commands
{
	public class SendTestNotificationCommand : IRequest<string>
	{
		public required string Title { get; set; }
		public required string Body { get; set; }
		public required string UserId { get; set; }
	}

	public class SendTestNotificationCommandHandler : IRequestHandler<SendTestNotificationCommand, string>
	{
		private readonly INotificationSender _notificationSender;
		public SendTestNotificationCommandHandler(INotificationSender notificationSender)
		{
			_notificationSender = notificationSender;
		}
		public async Task<string> Handle(SendTestNotificationCommand command, CancellationToken cancellationToken)
		{
			await _notificationSender.SendToUserAsync(command.UserId, command.Body);
			return "Notification sent successfully";
		}
	}
}