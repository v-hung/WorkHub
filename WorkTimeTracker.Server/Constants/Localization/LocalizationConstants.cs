namespace WorkTimeTracker.Server.Constants.Localization
{
	public static class LocalizationConstants
	{
		public static readonly LanguageCode[] SupportedLanguages = {
			new LanguageCode
			{
				Code = "en-US",
				DisplayName= "English"
			},
			new LanguageCode
			{
				Code = "ja-JP",
				DisplayName= "Japanese"
			},
			new LanguageCode
			{
				Code = "vi-VN",
				DisplayName = "Vietnamese"
			}
		};
	}
}