using System.Text.Json.Serialization;
using WorkHub.Application.JsonConverters;
using WorkHub.Application.Models.BioStar;

namespace WorkHub.Application.Responses.BioStar
{
	public class BioStarGetUsersResponse
	{
		[JsonPropertyName("UserCollection")]
		public required BioStarGetUsersResponseData UserCollection { get; set; }
	}

	public class BioStarGetUsersResponseData
	{
		[JsonConverter(typeof(StringToIntConverter))]
		public required int Total { get; set; }
		public required List<BioStarUser> Rows { get; set; } = [];
	}
}