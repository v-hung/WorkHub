using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Utils;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Infrastructure.Services.Templates
{
	public class EmailTemplateService : IEmailTemplateService
	{
		public async Task<string> GetEmailTemplateAsync<T>(string templateName, T model, Nationality language)
		{
			var templatePath = Path.Combine("Templates", "Email", $"{templateName}.{language.ToString().ReplaceUnderscoreToDash()}.html");
			var templateContent = await File.ReadAllTextAsync(templatePath);
			string body = ReplacePlaceholders(templateContent, typeof(T).GetProperties()
				.ToDictionary(prop => prop.Name, prop => prop.GetValue(model)?.ToString() ?? string.Empty));

			return body;
		}

		private string ReplacePlaceholders(string template, Dictionary<string, string> placeholders)
		{
			if (placeholders == null) return template;

			foreach (var placeholder in placeholders)
			{
				template = template.Replace($"{{{placeholder.Key}}}", placeholder.Value);
			}
			return template;
		}
	}
}