using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Wrapper
{
	public class CursorPaginated<T>
	{
		[Required]
		public List<T> Data { get; set; }

		public int? LastId { get; set; }

		[Required]
		public int Limit { get; set; }

		[Required]
		public int TotalCount { get; set; }

		[Required]
		public bool HasMore { get; set; }

		public CursorPaginated(List<T> data, int? lastId, int limit, int totalCount, bool hasMore)
		{
			Data = data;
			LastId = lastId;
			Limit = limit;
			TotalCount = totalCount;
			HasMore = hasMore;
		}
	}
}