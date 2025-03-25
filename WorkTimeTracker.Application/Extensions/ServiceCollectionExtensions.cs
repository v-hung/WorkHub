

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkTimeTracker.Application.Features.Requests.Validators;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddApplicationLayer(this IServiceCollection services)
	{
		services.AddLocalization(options => options.ResourcesPath = "Resources");

		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		services.AddScoped<IRequestValidator<LeaveRequest>, LeaveRequestValidator>();
		services.AddScoped<IRequestValidator<TimesheetRequest>, TimesheetRequestValidator>();

	}
}