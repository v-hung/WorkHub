using WorkHub.Application.Models.BioStar;

namespace WorkHub.Application.Responses.BioStar
{
	public class BioStarGetEventsResponse
	{
		public required BioStarGetEventsResponseData EventCollection { get; set; }
	}

	public class BioStarGetEventsResponseData
	{
		public required List<BioStarEvent> Rows { get; set; }
	}
}