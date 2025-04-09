using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.Interfaces.Services
{
	public interface IEmailService
	{
		Task SendEmailAsync(string toEmail, string subject, string body, bool isHtml = true);

		Task SendEmailWithTemplateAsync<T>(string toEmail, string subject, string templateName, T model, Nationality? language = Nationality.vi_VN);

	}
}