

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Features.Requests.Validators;

namespace WorkHub.Application.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddApplicationLayer(this IServiceCollection services)
	{
		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

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