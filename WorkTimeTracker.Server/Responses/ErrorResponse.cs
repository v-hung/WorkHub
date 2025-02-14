using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace Timesheet.Server.Responses;

public class ErrorResponse
{
	[Required]
	public int StatusCode { get; set; }

	[Required]
	public required string Message { get; set; }

	public string? Details { get; set; }

	public override string ToString() =>
			JsonSerializer.Serialize(this);
}