using System.Text.Json;
using System.Text.Json.Serialization;

namespace WorkHub.Server.Converters
{
	public class UtcDateTimeConverter : JsonConverter<DateTime>
	{
		public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			return DateTime.SpecifyKind(reader.GetDateTime(), DateTimeKind.Utc);
		}

		public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
		{
			var utc = DateTime.SpecifyKind(value, DateTimeKind.Utc);
			writer.WriteStringValue(utc.ToString("O")); // "O" = ISO 8601 with Z
		}
	}

}