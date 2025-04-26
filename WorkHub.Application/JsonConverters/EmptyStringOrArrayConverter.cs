using System.Text.Json;
using System.Text.Json.Serialization;

namespace WorkHub.Application.JsonConverters
{
	public class EmptyStringOrArrayConverter<T> : JsonConverter<List<T>>
	{
		public override List<T> Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			if (reader.TokenType == JsonTokenType.String)
			{
				string str = reader.GetString() ?? string.Empty;
				if (string.IsNullOrWhiteSpace(str))
				{
					return [];
				}
			}
			else if (reader.TokenType == JsonTokenType.StartArray)
			{
				return JsonSerializer.Deserialize<List<T>>(ref reader, options) ?? [];
			}

			throw new JsonException("Expected string or array for List<T> converter.");
		}

		public override void Write(Utf8JsonWriter writer, List<T> value, JsonSerializerOptions options)
		{
			JsonSerializer.Serialize(writer, value, options);
		}
	}
}