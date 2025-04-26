using System.Text.Json.Serialization;
using WorkHub.Application.JsonConverters;
using WorkHub.Application.Models.BioStar;

namespace WorkHub.Application.Responses.BioStar
{
	public class BioStarGetEventsResponse
	{

		[JsonPropertyName("EventCollection")]
		public required BioStarGetEventsResponseData EventCollection { get; set; }
	}

	public class BioStarGetEventsResponseData
	{
		[JsonConverter(typeof(EmptyStringOrArrayConverter<BioStarEvent>))]
		public List<BioStarEvent>? Rows { get; set; }
	}
}