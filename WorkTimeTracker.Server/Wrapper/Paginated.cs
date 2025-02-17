using System.ComponentModel.DataAnnotations;

namespace WorkTimeTracker.Server.Wrapper
{
	public class Paginated<T>
	{
		[Required]
		public List<T> Data { get; set; }

		[Required]
		public int CurrentPage { get; set; }

		[Required]
		public int TotalPages { get; set; }

		[Required]
		public int TotalCount { get; set; }

		[Required]
		public int PageSize { get; set; }

		[Required]
		public bool HasPreviousPage => CurrentPage > 1;

		[Required]
		public bool HasNextPage => CurrentPage < TotalPages;

		public Paginated(List<T> data, int count, int page = 1, int pageSize = 10)
		{
			Data = data;
			CurrentPage = page;
			PageSize = pageSize;
			TotalPages = (int)Math.Ceiling(count / (double)pageSize);
			TotalCount = count;
		}
	}
}
