using System.Net.WebSockets;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WorkHub.Application.Configs;
using WorkHub.Application.Interfaces.BioStar.Services;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Domain.Constants.BioStar;

namespace WorkHub.Infrastructure.Services.BioStar
{
	public class BioStarWebSocketClientService
	{
		private ClientWebSocket _clientWebSocket;
		private readonly ILogger<BioStarWebSocketClientService> _logger;
		private readonly BioStarConfig _bioStarConfig;
		private readonly IServiceProvider _serviceProvider;
		private readonly IStringLocalizer<BioStarWebSocketClientService> _localizer;
		private readonly IBioStarEventProcessingQueue _bioStarEventProcessingQueue;
		private TaskCompletionSource<bool> _webSocketAuthenticatedTcs = new(TaskCreationOptions.RunContinuationsAsynchronously);

		public BioStarWebSocketClientService(ILogger<BioStarWebSocketClientService> logger, IOptions<BioStarConfig> bioStarConfig, IStringLocalizer<BioStarWebSocketClientService> localizer, IServiceProvider serviceProvider, IBioStarEventProcessingQueue bioStarEventProcessingQueue)
		{
			_clientWebSocket = CreateNewWebSocket();
			_logger = logger;
			_bioStarConfig = bioStarConfig.Value;
			_localizer = localizer;
			_serviceProvider = serviceProvider;
			_bioStarEventProcessingQueue = bioStarEventProcessingQueue;
		}

		public async Task<bool> ConnectAsync(CancellationToken cancellationToken)
		{
			if (_clientWebSocket.State != WebSocketState.Open)
			{
				try
				{
					string baseUrl = _bioStarConfig.BioStarWebsocketUrl;

					var sessionId = await GetBioStarService().GetAccessTokenAsync(true);
					if (string.IsNullOrWhiteSpace(sessionId))
					{
						_logger.LogWarning("No session ID available for BioStar API.");
						throw new Exception(_localizer["NoSessionIdAvailable"]);
					}

					await _clientWebSocket.ConnectAsync(new Uri(baseUrl), cancellationToken);
					_logger.LogInformation("WebSocket connected successfully.");

					await SendMessageAsync($"bs-session-id={sessionId}", cancellationToken);

					await Task.WhenAny(_webSocketAuthenticatedTcs.Task, Task.Delay(TimeSpan.FromSeconds(5), cancellationToken));
					await WebsocketEventStartAsync(cancellationToken);

					return true;
				}
				catch (Exception ex)
				{
					_logger.LogError($"Connection BioStar websocket failed: {ex.Message}");
					return false;
				}
			}
			return true;
		}

		public async Task ReceiveMessagesAsync(CancellationToken cancellationToken)
		{
			var buffer = new byte[1024];

			while (!_clientWebSocket.CloseStatus.HasValue && !cancellationToken.IsCancellationRequested)
			{
				try
				{
					var result = await _clientWebSocket.ReceiveAsync(new ArraySegment<byte>(buffer), cancellationToken);

					if (result.MessageType == WebSocketMessageType.Text)
					{
						string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
						_logger.LogInformation("Received message: " + message);

						if (BioStarConst.RESPONSE_WEBSOCKET_SUCCESS.Contains(message))
						{
							_webSocketAuthenticatedTcs.TrySetResult(true);
						}

						_bioStarEventProcessingQueue.Enqueue(async token =>
						{
							using (var scope = _serviceProvider.CreateScope())
							{
								var bioStarService = scope.ServiceProvider.GetRequiredService<IBioStarService>();
								await bioStarService.SyncMessageEvent(message);
							}
						});
					}
					else if (result.MessageType == WebSocketMessageType.Close)
					{
						_logger.LogInformation("WebSocket closing.");
						await SafeCloseConnectionAsync(cancellationToken);
						break;
					}
				}
				catch (Exception ex)
				{
					_logger.LogError($"Error while receiving message: {ex.Message}");
					await SafeCloseConnectionAsync(cancellationToken);
				}
			}
		}

		public async Task SendMessageAsync(string message, CancellationToken cancellationToken)
		{
			var messageBytes = Encoding.UTF8.GetBytes(message);
			var arraySegment = new ArraySegment<byte>(messageBytes);

			if (_clientWebSocket.State == WebSocketState.Open)
			{
				await _clientWebSocket.SendAsync(arraySegment, WebSocketMessageType.Text, true, cancellationToken);
			}
		}

		public async Task SafeCloseConnectionAsync(CancellationToken cancellationToken)
		{

			if (_clientWebSocket != null && (_clientWebSocket.State == WebSocketState.Open || _clientWebSocket.State == WebSocketState.CloseReceived))
			{
				try
				{
					_logger.LogInformation("Closing WebSocket connection...");
					await _clientWebSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "BioStar websocket Closing", cancellationToken);
				}
				catch (Exception ex)
				{
					_logger.LogWarning(ex, "Error occurred while closing WebSocket.");
				}
			}
			else
			{
				_logger.LogInformation("WebSocket is already closed or not in a closable state.");
			}
		}

		public async Task<WebSocketState> ReConnectAsync(CancellationToken cancellationToken)
		{
			if (_clientWebSocket.State == WebSocketState.Closed || _clientWebSocket.State == WebSocketState.Aborted)
			{
				try
				{
					_clientWebSocket.Dispose();
				}
				catch (Exception ex)
				{
					_logger.LogWarning(ex, "Error disposing old ClientWebSocket.");
				}

				_clientWebSocket = CreateNewWebSocket();
				_webSocketAuthenticatedTcs = new(TaskCreationOptions.RunContinuationsAsynchronously);

				var connected = await ConnectAsync(cancellationToken);

				if (connected)
				{
					_logger.LogInformation("Reconnected to BioStar WebSocket.");
				}
			}

			return _clientWebSocket.State;
		}

		public WebSocketState GetWebSocketState()
		{
			return _clientWebSocket.State;
		}

		private ClientWebSocket CreateNewWebSocket()
		{
			var ws = new ClientWebSocket();
			ws.Options.RemoteCertificateValidationCallback = (sender, cert, chain, sslPolicyErrors) => true;
			return ws;
		}

		private async Task WebsocketEventStartAsync(CancellationToken cancellationToken)
		{
			try
			{
				await GetBioStarService().ExecuteWithRetryAsync<dynamic>(client =>
					client.PostAsync(_bioStarConfig.BioStarApiUrl + BioStarConst.WS_EVENT_START_URI, null, cancellationToken)
				);
			}
			catch (Exception ex)
			{
				_logger.LogError($"Error while receiving message: {ex.Message}");
				await SafeCloseConnectionAsync(cancellationToken);
			}
		}

		private IBioStarService GetBioStarService()
		{
			// Create a new scope biostar service
			using var scope = _serviceProvider.CreateScope();
			return scope.ServiceProvider.GetRequiredService<IBioStarService>();
		}
	}
}