using System.Globalization;
using Microsoft.AspNetCore.Localization;
using WorkTimeTracker.Server.Constants.Localization;
using WorkTimeTracker.Server.Interfaces.Data;
using WorkTimeTracker.Server.Middlewares;

namespace WorkTimeTracker.Server.Extensions;

static class ApplicationBuilderExtensions
{

	public static void UseCustomMiddlewares(this IApplicationBuilder app)
	{
		app.UseMiddleware<GlobalExceptionMiddleware>();
	}

	public static void UseSwaggerDocumentation(this IApplicationBuilder app)
	{
		app.UseSwagger();
		app.UseSwaggerUI();
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

		app.UseMiddleware<RequestCultureMiddleware>();

		return app;
	}
}