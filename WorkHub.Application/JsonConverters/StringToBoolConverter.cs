using System.Text.Json;
using System.Text.Json.Serialization;

namespace WorkHub.Application.JsonConverters
{
	public class StringToBoolConverter : JsonConverter<bool>
	{
		public override bool Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			return reader.TokenType switch
			{
				JsonTokenType.String => bool.TryParse(reader.GetString(), out var b) && b,
				JsonTokenType.True => true,
				JsonTokenType.False => false,
				_ => throw new JsonException($"Unexpected token parsing boolean: {reader.TokenType}")
			};
		}

		public override void Write(Utf8JsonWriter writer, bool value, JsonSerializerOptions options)
		{
			writer.WriteBooleanValue(value);
		}
	}
}