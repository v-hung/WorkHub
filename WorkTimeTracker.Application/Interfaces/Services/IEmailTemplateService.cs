using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IEmailTemplateService
	{
		Task<string> GetEmailTemplateAsync<T>(string templateName, T model, Nationality language);
	}
}