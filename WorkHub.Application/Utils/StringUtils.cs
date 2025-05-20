namespace WorkHub.Application.Utils
{
	public static class StringUtils
	{
		public static string ReplaceUnderscoreToDash(this string input)
		{
			return input?.Replace('_', '-') ?? string.Empty;
		}

		public static string ToSnakeCase(this string input)
		{
			if (string.IsNullOrEmpty(input))
				return input;

			var stringBuilder = new System.Text.StringBuilder();
			for (int i = 0; i < input.Length; i++)
			{
				var c = input[i];
				if (char.IsUpper(c))
				{
					if (i > 0)
						stringBuilder.Append('_');

					stringBuilder.Append(char.ToLowerInvariant(c));
				}
				else
				{
					stringBuilder.Append(c);
				}
			}

			return stringBuilder.ToString();
		}
	}
}