using Timesheet.Server.Interfaces.Data;
using Timesheet.Server.Middlewares;

namespace Timesheet.Server.Extensions;

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
}