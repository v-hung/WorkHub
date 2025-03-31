

using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Approvals.Commands;
using WorkTimeTracker.Application.Features.Requests.Commands;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Application.Features.Requests.Validators;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Extensions;

public static class ServiceCollectionExtensions
{
	public static void AddApplicationLayer(this IServiceCollection services)
	{
		services.AddAutoMapper(Assembly.GetExecutingAssembly());
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));

		services.AddTransient<IRequestHandler<CreateRequestCommand<LeaveRequestDto, CreateLeaveRequestDto>, LeaveRequestDto>, CreateRequestCommandHandler<LeaveRequestDto, CreateLeaveRequestDto>>();

		services.AddTransient<IRequestHandler<CancelRequestCommand<LeaveRequestDto, CreateLeaveRequestDto>, LeaveRequestDto>, CancelRequestCommandHandler<LeaveRequestDto, CreateLeaveRequestDto>>();

		services.AddTransient<IRequestHandler<ApproveRequestCommand<LeaveRequestDto, LeaveRequest>, LeaveRequestDto>, ApproveRequestCommandHandler<LeaveRequestDto, LeaveRequest>>();

		services.AddTransient<IRequestHandler<RejectRequestCommand<LeaveRequestDto, LeaveRequest>, LeaveRequestDto>, RejectRequestCommandHandler<LeaveRequestDto, LeaveRequest>>();

		services.AddScoped<IRequestValidator<CreateLeaveRequestDto>, LeaveRequestValidator>();
		services.AddScoped<IRequestValidator<CreateTimesheetRequestDto>, TimesheetRequestValidator>();
	}
}