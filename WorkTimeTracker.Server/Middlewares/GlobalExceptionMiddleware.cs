using WorkTimeTracker.Server.Middlewares.Exceptions;
using WorkTimeTracker.Server.Responses;

namespace WorkTimeTracker.Server.Middlewares;

public class GlobalExceptionMiddleware
{
	private readonly RequestDelegate _next;
	private readonly ILogger<GlobalExceptionMiddleware> _logger;

	public GlobalExceptionMiddleware(
		RequestDelegate next,
		ILogger<GlobalExceptionMiddleware> logger)
	{
		_next = next;
		_logger = logger;
	}

	public async Task InvokeAsync(HttpContext context)
	{
		try
		{
			await _next(context);
		}
		catch (BusinessException ex)
		{
			await HandleBusinessExceptionAsync(context, ex);
		}
		catch (Exception ex)
		{
			await HandleUnexpectedExceptionAsync(context, ex);
		}
	}

	private Task HandleBusinessExceptionAsync(HttpContext context, BusinessException exception)
	{
		_logger.LogWarning(exception, exception.Message);

		context.Response.ContentType = "application/json";
		context.Response.StatusCode = (int)exception.StatusCode;

		return context.Response.WriteAsync(new ErrorResponse
		{
			StatusCode = (int)exception.StatusCode,
			Message = exception.Message,
			Details = exception.Details
		}.ToString());
	}

	private Task HandleUnexpectedExceptionAsync(HttpContext context, Exception exception)
	{
		_logger.LogError(exception, "Unexpected error occurred");

		context.Response.ContentType = "application/json";
		context.Response.StatusCode = 500;

		return context.Response.WriteAsync(new ErrorResponse
		{
			StatusCode = 500,
			Message = "Internal Server Error"
		}.ToString());
	}
}