namespace WorkHub.Application.Responses.BioStar
{
	public class BioStarSyncHistoricalEventsResponse
	{
		public required int LoadCount { get; set; }
		public required int NewCount { get; set; }
		public required int UpdateCount { get; set; }
	}
}