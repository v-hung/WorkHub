using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using WorkTimeTracker.Application.Configs;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Infrastructure.Services
{
	public class EmailService : IEmailService
	{
		private readonly EmailConfig _emailConfig;
		private readonly IEmailTemplateService _emailTemplateService;

		public EmailService(IOptions<EmailConfig> emailConfig, IEmailTemplateService emailTemplateService)
		{
			_emailConfig = emailConfig.Value;
			_emailTemplateService = emailTemplateService;
		}

		public async Task SendEmailAsync(string toEmail, string subject, string body, bool isHtml = true)
		{
			var message = new MailMessage
			{
				From = new MailAddress(_emailConfig.Username, _emailConfig.Name),
				Subject = subject,
				Body = body,
				IsBodyHtml = isHtml
			};

			message.To.Add(toEmail);

			using var client = new SmtpClient(_emailConfig.Host, _emailConfig.Port)
			{
				Credentials = new NetworkCredential(_emailConfig.Username, _emailConfig.Password),
				EnableSsl = true
			};

			await client.SendMailAsync(message);
		}

		public async Task SendEmailWithTemplateAsync<T>(string toEmail, string subject, string templateName, T model, Nationality? language = Nationality.vi_VN)
		{
			var body = await _emailTemplateService.GetEmailTemplateAsync(templateName, model, language ?? Nationality.vi_VN);
			await SendEmailAsync(toEmail, subject, body);
		}
	}
}