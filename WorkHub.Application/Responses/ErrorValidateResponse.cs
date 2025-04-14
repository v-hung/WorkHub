using System.ComponentModel.DataAnnotations;
using Swashbuckle.AspNetCore.Annotations;

namespace WorkHub.Application.Responses
{
	public class ErrorValidateResponse
	{

		[Required]
		[SwaggerSchema("https://tools.ietf.org/html/rfc9110#section-15.5.1")]
		public required string Type { get; set; }

		[Required]
		[SwaggerSchema("One or more validation errors occurred.")]
		public required string Title { get; set; }

		[Required]
		public int Status { get; set; }

		public Dictionary<string, string[]>? Errors { get; set; }

	}
}