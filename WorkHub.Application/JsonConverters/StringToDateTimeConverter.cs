using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace WorkHub.Application.JsonConverters
{
	public class StringToDateTimeConverter : JsonConverter<DateTime>
	{
		public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			if (reader.TokenType == JsonTokenType.String)
			{
				var str = reader.GetString();
				if (DateTime.TryParse(str, CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal | DateTimeStyles.AssumeUniversal, out var dt))
				{
					return dt;
				}
				throw new JsonException("Invalid DateTime string");
			}
			throw new JsonException($"Unexpected token parsing DateTime: {reader.TokenType}");
		}

		public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
		{
			writer.WriteStringValue(value.ToString("o")); // ISO 8601
		}
	}
}