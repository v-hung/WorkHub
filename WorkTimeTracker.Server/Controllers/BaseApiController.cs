using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WorkTimeTracker.Server.Controllers;

[ApiController]
public abstract class BaseApiController<T> : ControllerBase
{
	private ILogger<T>? _loggerInstance;
	protected ILogger<T> _logger => _loggerInstance ??= HttpContext.RequestServices.GetService<ILogger<T>>()!;

	private IMediator? _mediatorInstance;
	protected IMediator _mediator => _mediatorInstance ??= HttpContext.RequestServices.GetService<IMediator>()!;
}