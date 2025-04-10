using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Swashbuckle.AspNetCore.Annotations;

namespace WorkTimeTracker.Application.Requests
{
	public class CursorPagedRequest
	{

		[Required]
		public int Cursor { get; set; }

		[Range(1, 100, ErrorMessage = "Page size must be between 1 and 100")]
		[DefaultValue(10)]
		[Required]
		public int Limit = 10;
		public string? SearchString { get; set; }

		[SwaggerSchema("of the form fieldname [ascending|descending],fieldname [ascending|descending]...")]
		public string[]? OrderBy { get; set; }

	}
}