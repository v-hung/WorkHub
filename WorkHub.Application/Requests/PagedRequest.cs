using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Swashbuckle.AspNetCore.Annotations;

namespace WorkHub.Application.Requests
{
	public class PagedRequest
	{
		private int _pageNumber = 1;
		private int _pageSize = 10;

		[Range(1, int.MaxValue, ErrorMessage = "Page number must be greater than 0")]
		[DefaultValue(1)]
		[Required]
		public int PageNumber
		{
			get => _pageNumber;
			set => _pageNumber = value < 1 ? 1 : value;
		}

		[Range(1, 100, ErrorMessage = "Page size must be between 1 and 100")]
		[DefaultValue(10)]
		[Required]
		public int PageSize
		{
			get => _pageSize;
			set => _pageSize = value < 1 ? 10 : (value > 100 ? 100 : value);
		}
		public List<SearchCondition> SearchConditions { get; set; } = [];

		[SwaggerSchema("of the form fieldname [ascending|descending],fieldname [ascending|descending]...")]
		public string? OrderBy { get; set; }
	}
}