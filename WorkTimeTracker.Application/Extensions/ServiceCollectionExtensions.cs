

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Features.Requests.Validators;

namespace WorkTimeTracker.Application.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddApplicationLayer(this IServiceCollection services)
	{
		services.AddLocalization(options => options.ResourcesPath = "Resources");

		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		services.AddScoped<IRequestValidator<CreateLeaveRequestDto>, LeaveRequestValidator>();
		services.AddScoped<IRequestValidator<CreateTimesheetRequestDto>, TimesheetRequestValidator>();
	}
}