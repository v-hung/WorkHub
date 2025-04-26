using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WorkHub.Application.Interfaces.Messaging;

namespace WorkHub.Infrastructure.Services.BioStar
{
	public class BioStarEventProcessingHostedService : BackgroundService
	{
		private readonly ILogger<BioStarEventProcessingHostedService> _logger;
		private readonly IBioStarEventProcessingQueue _queue;

		public BioStarEventProcessingHostedService(IBioStarEventProcessingQueue queue, ILogger<BioStarEventProcessingHostedService> logger)
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