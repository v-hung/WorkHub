using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.BioStar.Services;
using WorkHub.Application.Interfaces.Messaging;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Infrastructure.BioStar.Services;
using WorkHub.Infrastructure.Messaging;
using WorkHub.Infrastructure.Repositories;
using WorkHub.Infrastructure.Services;
using WorkHub.Infrastructure.Services.BioStar;
using WorkHub.Infrastructure.Services.Requests;

namespace WorkHub.Infrastructure.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddInfrastructureLayer(this IServiceCollection services)
	{
		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));
		services.AddScoped<ITimesheetRepository, TimesheetRepository>();
		services.AddScoped<ITimesheetService, TimesheetService>();

		// biostar
		services.AddScoped<IBioStarService, BioStarService>();
		services.AddSingleton<BioStarWebSocketClientService>();
		services.AddSingleton<IBioStarEventProcessingQueue, BioStarEventProcessingQueue>();
		services.AddHostedService<BioStarWebSocketConnectionHostedService>();
		services.AddHostedService<BioStarEventProcessingHostedService>();

		// requests
		services.AddScoped<IRequestRepository, RequestRepository>();

		services.AddScoped<RequestServiceDependencies>();
		services.Scan(scan => scan
			.FromAssemblies(Assembly.GetExecutingAssembly())
			.AddClasses(c => c.AssignableTo(typeof(IRequestService<>)))
			.AsImplementedInterfaces()
			.WithScopedLifetime());

		services.Scan(scan => scan
			.FromAssemblies(Assembly.GetExecutingAssembly())
			.AddClasses(c => c.AssignableTo(typeof(IRequestApprovalService<>)))
			.AsImplementedInterfaces()
			.WithScopedLifetime());

	}
}