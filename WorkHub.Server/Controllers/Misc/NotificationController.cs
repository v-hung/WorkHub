using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Misc;
using WorkHub.Application.Features.Notifications.Queries;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;

namespace WorkHub.Server.Controllers.Misc
{
	[Route("api/notifications")]
	public class NotificationController : BaseApiController<NotificationController>
	{

		[HttpGet]
		public async Task<ActionResult<CursorPaginated<NotificationDto>>> Search([FromQuery] CursorPagedRequest request)
		{
			var data = await _mediator.Send(new CursorSearchNotificationQuery { Request = request });

			return Ok(data);
		}

	}
}