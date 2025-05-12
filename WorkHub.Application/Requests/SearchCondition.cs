using System.ComponentModel.DataAnnotations;

namespace WorkHub.Application.Requests
{
	public class SearchCondition
	{
		[Required]
		public string Column { get; set; } = default!;

		[Required]
		public SearchOperator Operator { get; set; } = SearchOperator.Eq;

		public List<string> Values { get; set; } = [];
	}

	public enum SearchOperator
	{
		Eq, Neq, Gt, Lt, Gte, Lte, Contains, In, Between
	}

}