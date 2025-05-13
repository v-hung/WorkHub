using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Misc;
using WorkHub.Application.Features.Notifications.Commands;
using WorkHub.Application.Features.Notifications.Queries;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;

namespace WorkHub.Server.Controllers.Misc
{
	[Route("api/notifications")]
	public class NotificationController : BaseApiController<NotificationController>
	{

		[HttpPost("search")]
		[Authorize]
		public async Task<ActionResult<CursorPaginated<NotificationDto>>> Search(CursorPagedRequest request)
		{
			var data = await _mediator.Send(new CursorSearchNotificationQuery { Request = request });

			return Ok(data);
		}

		[HttpGet("unread-count")]
		[Authorize]
		public async Task<ActionResult<int>> GetUnreadCount()
		{
			var data = await _mediator.Send(new GetUnreadCountQuery());

			return Ok(data);
		}

		[HttpPost("send-test")]
		// [Authorize]
		public async Task<ActionResult<string>> SendTestNotification([FromBody] SendTestNotificationCommand command)
		{
			var data = await _mediator.Send(command);

			return Ok(data);
		}

	}
}