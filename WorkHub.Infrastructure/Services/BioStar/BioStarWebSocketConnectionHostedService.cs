using System.Net.WebSockets;
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
					while (!stoppingToken.IsCancellationRequested)
					{
						if (_webSocketClientService.GetWebSocketState() == WebSocketState.Open)
						{
							// Process incoming messages
							await _webSocketClientService.ReceiveMessagesAsync(stoppingToken);
						}
						else
						{
							_logger.LogInformation("WebSocket is not open. Waiting...");
							await Task.Delay(1000, stoppingToken);
						}
					}
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "Error in WebSocket background service.");
				// Do not reconnect here, because it may be due to the expired token biostar due to login in another place
			}
		}

		public override async Task StopAsync(CancellationToken cancellationToken)
		{
			await _webSocketClientService.CloseConnectionAsync(cancellationToken);
			await base.StopAsync(cancellationToken);
		}
	}
}