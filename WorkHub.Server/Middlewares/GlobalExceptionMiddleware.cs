using System.Text.Json;
using WorkHub.Application.Responses;
using WorkHub.Application.Exceptions;

namespace WorkHub.Server.Middlewares;

public class GlobalExceptionMiddleware
{
	private readonly RequestDelegate _next;
	private readonly ILogger<GlobalExceptionMiddleware> _logger;

	private static readonly JsonSerializerOptions _jsonOptions = new JsonSerializerOptions
	{
		PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
		WriteIndented = false
	};

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
		_logger.LogWarning(exception.ToString());
		_logger.LogWarning("BusinessException: {Message}", exception.Message);

		context.Response.ContentType = "application/json";
		context.Response.StatusCode = (int)exception.StatusCode;

		return context.Response.WriteAsync(JsonSerializer.Serialize(new ErrorResponse
		{
			StatusCode = (int)exception.StatusCode,
			Message = exception.Message,
			Details = exception.Details
		}, _jsonOptions));
	}

	private Task HandleUnexpectedExceptionAsync(HttpContext context, Exception exception)
	{
		_logger.LogWarning(exception.ToString());
		// _logger.LogError("Unexpected error occurred: {Message}", exception.Message);

		context.Response.ContentType = "application/json";
		context.Response.StatusCode = 500;

		return context.Response.WriteAsync(JsonSerializer.Serialize(new ErrorResponse
		{
			StatusCode = 500,
			Message = "Internal Server Error"
		}, _jsonOptions));
	}
}