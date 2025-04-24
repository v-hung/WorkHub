

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Interfaces.Services;
using WorkHub.Domain.Entities.Requests;
using WorkHub.Infrastructure.Repositories;
using WorkHub.Infrastructure.Services;
using WorkHub.Infrastructure.Services.Approvals;
using WorkHub.Infrastructure.Services.Requests;

namespace WorkHub.Infrastructure.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddInfrastructureLayer(this IServiceCollection services)
	{
		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		services.AddScoped<IBioStarService, BioStarService>();

		services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));
		services.AddScoped<ITimesheetRepository, TimesheetRepository>();
		services.AddScoped<ITimesheetService, TimesheetService>();

		services.AddScoped<IRequestService<CreateLeaveRequestDto>, LeaveRequestService>();
		services.AddScoped<IRequestService<CreateTimesheetAdjustmentRequestDto>, TimesheetAdjustmentRequestService>();

		services.AddScoped<IRequestApprovalService<LeaveRequest>, LeaveRequestApprovalService>();
		services.AddScoped<IRequestApprovalService<TimesheetAdjustmentRequest>, TimesheetAdjustmentRequestApprovalService>();
	}
}