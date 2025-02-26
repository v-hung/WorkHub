namespace WorkTimeTracker.Server.Constants.Localization
{
	public static class LocalizationConstants
	{
		public static readonly LanguageCode[] SupportedLanguages = {
			new() {
				Code = "en-US",
				DisplayName= "English"
			},
			new()
			{
				Code = "ja-JP",
				DisplayName= "Japanese"
			},
			new()
			{
				Code = "vi-VN",
				DisplayName = "Vietnamese"
			}
		};
	}
}