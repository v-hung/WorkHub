using Microsoft.AspNetCore.Mvc;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Requests.DTOs;

namespace WorkTimeTracker.Server.Controllers.Requests
{
	[Route("api/requests")]
	[ApiExplorerSettings(GroupName = "Requests")]
	public abstract class BaseRequestController<TRequest, TCreateRequest> : BaseApiController<BaseRequestController<TRequest, TCreateRequest>> where TRequest : RequestDto where TCreateRequest : CreateRequestDto
	{
		public abstract Task<ActionResult<TRequest>> CreateRequest(TCreateRequest request);

		public abstract Task<ActionResult<TRequest>> CancelRequest(int id);

		public abstract Task<ActionResult<TRequest>> ApprovalRequest(int id);

		public abstract Task<ActionResult<TRequest>> RejectRequest(int id);
	}
}