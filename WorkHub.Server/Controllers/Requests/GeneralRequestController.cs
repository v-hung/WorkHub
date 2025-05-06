using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Requests.Queries;

namespace WorkHub.Server.Controllers.Requests
{

	[Route("api/requests")]
	[ApiExplorerSettings(GroupName = "Requests")]
	public class GeneralRequestController : BaseApiController<GeneralRequestController>
	{
		[HttpGet("{id}")]
		[Authorize]
		public async Task<ActionResult<RequestCombinedDto>> GetById(int id)
		{
			var result = await _mediator.Send(new GetRequestByIdQuery<RequestCombinedDto> { Id = id });

			return Ok(result);
		}
	}
}