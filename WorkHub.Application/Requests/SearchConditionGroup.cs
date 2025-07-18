namespace WorkHub.Application.Requests
{
	public class SearchConditionGroup
	{
		public LogicalOperator Operator { get; set; } = LogicalOperator.And;

		public List<SearchConditionGroup>? Groups { get; set; }

		public List<SearchCondition>? Conditions { get; set; }
	}
	public enum LogicalOperator
	{
		And,
		Or
	}
}