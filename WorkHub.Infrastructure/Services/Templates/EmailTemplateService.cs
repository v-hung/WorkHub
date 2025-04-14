using WorkHub.Application.Interfaces.Services;
using WorkHub.Application.Utils;
using WorkHub.Domain.Enums;

namespace WorkHub.Infrastructure.Services.Templates
{
	public class EmailTemplateService : IEmailTemplateService
	{
		public async Task<string> GetEmailTemplateAsync<T>(string templateName, T model, Nationality language)
		{
			var templatePath = Path.Combine("Templates", "Email", templateName, $"{templateName}.{language.ToString().ReplaceUnderscoreToDash()}.html");
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