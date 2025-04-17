using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Requests
{
	public class CursorPagedRequest
	{
		public int? CursorId { get; set; }

		public CursorPagedRequestDirection CursorPagedRequestDirection { get; set; } = CursorPagedRequestDirection.Next;

		public bool NewestFirst { get; set; } = true;

		[Range(1, 100, ErrorMessage = "Page size must be between 1 and 100")]
		[DefaultValue(10)]
		[Required]
		public int Limit = 10;
		public string? SearchString { get; set; }

	}

	public enum CursorPagedRequestDirection
	{
		Next,
		Previous
	}
}