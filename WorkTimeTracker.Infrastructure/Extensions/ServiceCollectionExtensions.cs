

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace WorkTimeTracker.Infrastructure.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddInfrastructureLayer(this IServiceCollection services)
	{
		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		services.AddLocalization(options => options.ResourcesPath = "Resources");
    }
}