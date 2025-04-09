

using System.Reflection;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WorkTimeTracker.Application.Configs;
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

		AddRequestHandlers(services);
		AddValidators(services);
	}

	private static void AddRequestHandlers(IServiceCollection services)
	{
		// Leave Request
		services.AddTransient<IRequestHandler<CreateRequestCommand<RequestCombinedDto, CreateLeaveRequestDto>, RequestCombinedDto>, CreateRequestCommandHandler<RequestCombinedDto, CreateLeaveRequestDto>>();
		services.AddTransient<IRequestHandler<CancelRequestCommand<RequestCombinedDto, CreateLeaveRequestDto>, RequestCombinedDto>, CancelRequestCommandHandler<RequestCombinedDto, CreateLeaveRequestDto>>();
		services.AddTransient<IRequestHandler<ApproveRequestCommand<RequestCombinedDto, LeaveRequest>, RequestCombinedDto>, ApproveRequestCommandHandler<RequestCombinedDto, LeaveRequest>>();
		services.AddTransient<IRequestHandler<RejectRequestCommand<RequestCombinedDto, LeaveRequest>, RequestCombinedDto>, RejectRequestCommandHandler<RequestCombinedDto, LeaveRequest>>();

		// Timesheet Adjustment request
		services.AddTransient<IRequestHandler<CreateRequestCommand<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>, RequestCombinedDto>, CreateRequestCommandHandler<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>>();
		services.AddTransient<IRequestHandler<CancelRequestCommand<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>, RequestCombinedDto>, CancelRequestCommandHandler<RequestCombinedDto, CreateTimesheetAdjustmentRequestDto>>();
		services.AddTransient<IRequestHandler<ApproveRequestCommand<RequestCombinedDto, TimesheetAdjustmentRequest>, RequestCombinedDto>, ApproveRequestCommandHandler<RequestCombinedDto, TimesheetAdjustmentRequest>>();
		services.AddTransient<IRequestHandler<RejectRequestCommand<RequestCombinedDto, TimesheetAdjustmentRequest>, RequestCombinedDto>, RejectRequestCommandHandler<RequestCombinedDto, TimesheetAdjustmentRequest>>();
	}

	private static void AddValidators(IServiceCollection services)
	{
		services.AddScoped<IRequestValidator<CreateLeaveRequestDto>, LeaveRequestValidator>();
		services.AddScoped<IRequestValidator<CreateTimesheetAdjustmentRequestDto>, TimesheetAdjustmentRequestValidator>();
	}
}