using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Features.Requests.Validators;

namespace WorkHub.Application.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddApplicationServices(this IServiceCollection services)
	{
		var assembly = typeof(ServiceCollectionExtensions).Assembly;

		services.AddAutoMapper(assembly);
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(assembly));

		AddValidators(services);
	}

	private static void AddValidators(IServiceCollection services)
	{
		services.Scan(scan => scan
			.FromAssemblyOf<IRequestValidator<CreateRequestDto>>()
			.AddClasses(classes => classes.AssignableTo(typeof(IRequestValidator<>)))
			.AsImplementedInterfaces()
			.WithScopedLifetime()
		);
	}
}