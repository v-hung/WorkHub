using MediatR;
using WorkHub.Application.Interfaces.SignalR;
using WorkHub.Application.Models.SignalR.Notification;
using WorkHub.Application.Models.SignalR.Notification.DTOs;

namespace WorkHub.Application.Features.Notifications.Commands
{
	public class SendTestNotificationCommand : IRequest<string>
	{
		public required string UserId { get; set; }
		public required SystemNotificationMessageDto message { get; set; }
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
			await _notificationSender.SendToUserAsync(command.UserId, new BaseNotificationHubMessage
			{
				Data = command.message,
			});
			return "Notification sent successfully";
		}
	}
}