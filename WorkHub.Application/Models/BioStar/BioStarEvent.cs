using System.Text.Json.Serialization;
using WorkHub.Application.JsonConverters;

namespace WorkHub.Application.Models.BioStar
{
	public class BioStarEvent
	{
		public required string Id { get; set; }

		[JsonConverter(typeof(StringToDateTimeConverter))]
		public required DateTime ServerDatetime { get; set; }

		[JsonConverter(typeof(StringToDateTimeConverter))]
		public required DateTime Datetime { get; set; }

		public BioStarEventUserId? UserId { get; set; }

		public BioStarEventType? EventTypeId { get; set; }

	}

	public class BioStarEventUserId
	{
		public string? UserId { get; set; }
		public string? Name { get; set; }
	}
}