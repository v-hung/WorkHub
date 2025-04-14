namespace WorkHub.Application.Utils
{
	public static class StringUtils
	{
		public static string ReplaceUnderscoreToDash(this string input)
		{
			return input?.Replace('_', '-') ?? string.Empty;
		}
	}
}