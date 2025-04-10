using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Application.Requests
{
	public class CursorPagedRequest
	{
		public int? LastId { get; set; }

		[Range(1, 100, ErrorMessage = "Page size must be between 1 and 100")]
		[DefaultValue(10)]
		[Required]
		public int Limit = 10;
		public string? SearchString { get; set; }

	}
}