

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Infrastructure.Repositories;
using WorkTimeTracker.Infrastructure.Services;
using WorkTimeTracker.Infrastructure.Services.Requests;

namespace WorkTimeTracker.Infrastructure.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddInfrastructureLayer(this IServiceCollection services)
	{
		// services.AddAutoMapper(Assembly.GetExecutingAssembly());
		// services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		// services.AddLocalization(options => options.ResourcesPath = "Resources");

		services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));
		services.AddScoped<ITimesheetRepository, TimesheetRepository>();
		services.AddScoped<ITimesheetService, TimesheetService>();
		services.AddScoped<IRequestService<CreateLeaveRequestDto>, LeaveRequestService>();
		services.AddScoped<IRequestService<CreateTimesheetRequestDto>, TimesheetRequestService>();
		services.AddScoped<IApprovalService, ApprovalService>();
	}
}