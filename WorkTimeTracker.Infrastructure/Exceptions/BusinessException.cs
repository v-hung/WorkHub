using System.Net;

namespace WorkTimeTracker.Infrastructure.Exceptions;

public class BusinessException : Exception
{
    public HttpStatusCode StatusCode { get; }
    public Dictionary<string, string>? Details { get; set; }

    public BusinessException(HttpStatusCode statusCode, string message) : base(message)
    {
        StatusCode = statusCode;
    }
    public BusinessException(HttpStatusCode statusCode, string message, Dictionary<string, string> details) : base(message)
    {
        StatusCode = statusCode;
        Details = details;
    }
}