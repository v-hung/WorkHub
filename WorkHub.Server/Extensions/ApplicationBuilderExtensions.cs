using System.Globalization;
using Microsoft.AspNetCore.Localization;
using WorkHub.Domain.Constants.Localization;
using WorkHub.Application.Interfaces.Data;
using WorkHub.Server.Middlewares;
using WorkHub.Server.Hubs;
namespace WorkHub.Server.Extensions;

static class ApplicationBuilderExtensions
{

	public static void UseCustomMiddlewares(this IApplicationBuilder app)
	{
		app.UseMiddleware<GlobalExceptionMiddleware>();
		app.UseMiddleware<RequestCultureMiddleware>();
	}

	public static void UseSwaggerDocumentation(this IApplicationBuilder app)
	{
		app.UseSwagger();
		app.UseSwaggerUI();
		app.UseReDoc(c =>
		{
			c.DocumentTitle = "My API Docs";
			c.RoutePrefix = "docs";
		});
	}

	public static IApplicationBuilder UseEndpoints(this IApplicationBuilder app)
	{
		var webApplication = (WebApplication)app;

		// Configure SignalR hubs
		webApplication.MapHub<NotificationHub>("/hubs/notification");

		// Configure other endpoints
		webApplication.MapControllers();

		return app;
	}

	public static IApplicationBuilder Initialize(this IApplicationBuilder app, IConfiguration _configuration)
	{
		using var serviceScope = app.ApplicationServices.CreateScope();

		var initializers = serviceScope.ServiceProvider.GetServices<IDatabaseSeeder>();

		foreach (var initializer in initializers)
		{
			Task.Run(initializer.Initialize).GetAwaiter().GetResult();
		}

		return app;
	}

	public static IApplicationBuilder UseRequestLocalizationByCulture(this IApplicationBuilder app)
	{
		var supportedCultures = LocalizationConstants.SupportedLanguages.Select(l => new CultureInfo(l.Code)).ToArray();
		app.UseRequestLocalization(options =>
		{
			options.SupportedUICultures = supportedCultures;
			options.SupportedCultures = supportedCultures;
			options.DefaultRequestCulture = new RequestCulture(supportedCultures.First());
			options.ApplyCurrentCultureToResponseHeaders = true;
		});

		return app;
	}
}