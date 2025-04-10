using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WorkTimeTracker.Application.Interfaces.Messaging;

namespace WorkTimeTracker.Infrastructure.Services
{
	public class EmailSenderHostedService : BackgroundService
	{
		private readonly ILogger<EmailSenderHostedService> _logger;
		private readonly IEmailBackgroundQueue _queue;

		public EmailSenderHostedService(IEmailBackgroundQueue queue, ILogger<EmailSenderHostedService> logger)
		{
			_queue = queue;
			_logger = logger;
		}

		protected override async Task ExecuteAsync(CancellationToken stoppingToken)
		{
			while (!stoppingToken.IsCancellationRequested)
			{
				var workItem = await _queue.DequeueAsync(stoppingToken);

				try
				{
					await workItem(stoppingToken);
				}
				catch (Exception ex)
				{
					_logger.LogError(ex, "Error occurred while sending email in background.");
				}
			}
		}
	}
}