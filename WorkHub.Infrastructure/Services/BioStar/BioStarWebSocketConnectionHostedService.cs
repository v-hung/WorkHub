using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WorkHub.Infrastructure.Services.BioStar
{
	public class BioStarWebSocketConnectionHostedService : BackgroundService
	{
		private readonly BioStarWebSocketClientService _webSocketClientService;
		private readonly ILogger<BioStarWebSocketConnectionHostedService> _logger;

		public BioStarWebSocketConnectionHostedService(BioStarWebSocketClientService webSocketClientService, ILogger<BioStarWebSocketConnectionHostedService> logger)
		{
			_webSocketClientService = webSocketClientService;
			_logger = logger;
		}

		protected override async Task ExecuteAsync(CancellationToken stoppingToken)
		{
			try
			{
				var connected = await _webSocketClientService.ConnectAsync(stoppingToken);

				if (connected)
				{
					await _webSocketClientService.ReceiveMessagesAsync(stoppingToken);
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Error in WebSocket background service.");
			}
		}

		public override async Task StopAsync(CancellationToken cancellationToken)
		{
			await _webSocketClientService.CloseConnectionAsync(cancellationToken);
			await base.StopAsync(cancellationToken);
		}
	}
}