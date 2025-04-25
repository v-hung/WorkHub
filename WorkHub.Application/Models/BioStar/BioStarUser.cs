using System.Text.Json.Serialization;
using WorkHub.Application.JsonConverters;

namespace WorkHub.Application.Models.BioStar
{
	public class BioStarUser
	{
		public required string UserId { get; set; }

		public string? Name { get; set; }

		public string? Gender { get; set; }

		public string? Phone { get; set; }

		public string? Email { get; set; }

		[JsonConverter(typeof(StringToDateTimeConverter))]
		public DateTime? Birthday { get; set; }

		[JsonConverter(typeof(StringToBoolConverter))]
		public bool? PhotoExists { get; set; }

		public string? LoginId { get; set; }

		[JsonConverter(typeof(StringToDateTimeConverter))]
		public DateTime? ExpiryDatetime { get; set; }

		[JsonConverter(typeof(StringToBoolConverter))]
		public bool? Disabled { get; set; }

		[JsonConverter(typeof(StringToBoolConverter))]
		public bool? Expired { get; set; }

		public BioStarPermission? Permission { get; set; }
	}
}