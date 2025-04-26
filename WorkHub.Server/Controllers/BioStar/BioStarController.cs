using System.Net.WebSockets;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.Interfaces.BioStar.Services;
using WorkHub.Application.Requests.BioStar;
using WorkHub.Application.Responses.BioStar;
using WorkHub.Domain.Constants.Permission;
using WorkHub.Infrastructure.Services.BioStar;

namespace WorkHub.Server.Controllers.BioStar
{
	public class BioStarController : BaseApiController<BioStarController>
	{

		private readonly IBioStarService _bioStarService;
		private readonly BioStarWebSocketClientService _bioStarWebSocketClient;

		public BioStarController(IBioStarService bioStarService, BioStarWebSocketClientService bioStarWebSocketClient)
		{
			_bioStarService = bioStarService;
			_bioStarWebSocketClient = bioStarWebSocketClient;
		}

		// [Authorize(Policy = Permissions.BioStar.SyncUsers)]
		[HttpPost("sync-users")]
		public async Task<ActionResult<BioStarSyncAllUsersResponse>> SyncUsers()
		{
			var data = await _bioStarService.SyncAllUsersAsync();
			return Ok(data);
		}

		// [Authorize(Policy = Permissions.BioStar.SyncTimesheets)]
		[HttpPost("sync-timesheets")]
		public async Task<ActionResult<BioStarSyncHistoricalEventsResponse>> SyncTimesheets(GetHistoricalEventsRequest request)
		{
			var data = await _bioStarService.SyncHistoricalEvents(request);
			return Ok(data);
		}

		[HttpPost("reconnect-websocket")]
		public async Task<ActionResult<WebSocketState>> ReConnectWebsocket()
		{
			var data = await _bioStarWebSocketClient.ReConnectAsync(CancellationToken.None);
			return Ok(data);
		}

		[HttpGet("websocket-state")]
		public ActionResult<WebSocketState> GetWebSocketState()
		{
			var data = _bioStarWebSocketClient.GetWebSocketState();
			return Ok(data);
		}
	}
}