using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Misc;
using WorkTimeTracker.Application.Features.Notifications.Queries;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;

namespace WorkTimeTracker.Server.Controllers.Misc
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