namespace WorkHub.Application.Requests.BioStar
{
	public class GetHistoricalEventsRequest
	{
		public required DateTime From { get; set; }
		public required DateTime To { get; set; }
	}
}