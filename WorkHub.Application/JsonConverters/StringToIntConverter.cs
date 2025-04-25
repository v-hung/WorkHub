using System.Text.Json;
using System.Text.Json.Serialization;

namespace WorkHub.Application.JsonConverters
{
	public class StringToIntConverter : JsonConverter<int>
	{
		public override int Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			return reader.TokenType switch
			{
				JsonTokenType.String => int.TryParse(reader.GetString(), out var i) ? i : throw new JsonException("Invalid int string"),
				JsonTokenType.Number => reader.GetInt32(),
				_ => throw new JsonException($"Unexpected token parsing int: {reader.TokenType}")
			};
		}

		public override void Write(Utf8JsonWriter writer, int value, JsonSerializerOptions options)
		{
			writer.WriteNumberValue(value);
		}
	}
}