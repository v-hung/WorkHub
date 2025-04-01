using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Server.Controllers.Requests
{
	[Route("api/requests")]
	[ApiExplorerSettings(GroupName = "Requests")]
	public abstract class BaseRequestController<D, TCreateRequest> : BaseApiController<BaseRequestController<D, TCreateRequest>> where D : class where TCreateRequest : CreateRequestDto
	{
		public abstract Task<ActionResult<D>> CreateRequest(TCreateRequest request);

		public abstract Task<ActionResult<D>> CancelRequest(int id);

		public abstract Task<ActionResult<D>> ApprovalRequest(int id);

		public abstract Task<ActionResult<D>> RejectRequest(int id);
	}
}