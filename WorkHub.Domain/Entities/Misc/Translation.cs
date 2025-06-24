using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WorkHub.Domain.Constants.Localization;
using WorkHub.Domain.Entities.Audit;

namespace WorkHub.Domain.Entities.Misc
{
	[Table("translations")]
	public class Translation : Entity<int>
	{
		[StringLength(255)]
		public required string Key { get; set; }

		public required string Culture { get; set; } = LocalizationConstants.SupportedLanguages[0].Code;

		public required string Value { get; set; } = string.Empty;
	}
}