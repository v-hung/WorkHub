using WorkHub.Domain.Enums;

namespace WorkHub.Application.Interfaces.Services
{
	public interface IEmailTemplateService
	{
		Task<string> GetEmailTemplateAsync<T>(string templateName, T model, Nationality language);
	}
}