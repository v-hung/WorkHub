using AutoMapper;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Application.Features.Requests.DTOs;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Mappings
{
	public class RequestProfile : Profile
	{
		public RequestProfile()
		{
			// Base mapping
			CreateMap<Request, RequestCombinedMinimalDto>()
				.Include<LeaveRequest, RequestCombinedMinimalDto>()
				.Include<TimesheetAdjustmentRequest, RequestCombinedMinimalDto>();

			// Derived type mappings
			CreateMap<LeaveRequest, RequestCombinedMinimalDto>();
			CreateMap<TimesheetAdjustmentRequest, RequestCombinedMinimalDto>();

			// Same for the detailed DTO
			CreateMap<Request, RequestCombinedDto>()
				.Include<LeaveRequest, RequestCombinedDto>()
				.Include<TimesheetAdjustmentRequest, RequestCombinedDto>();

			CreateMap<LeaveRequest, RequestCombinedDto>();
			CreateMap<TimesheetAdjustmentRequest, RequestCombinedDto>();

			// Create API DTOs
			CreateMap<CreateRequestDto, Request>()
				.Include<CreateLeaveRequestDto, LeaveRequest>()
				.Include<CreateTimesheetAdjustmentRequestDto, TimesheetAdjustmentRequest>();

			CreateMap<CreateLeaveRequestDto, LeaveRequest>().ReverseMap();
			CreateMap<CreateTimesheetAdjustmentRequestDto, TimesheetAdjustmentRequest>().ReverseMap();
		}
	}
}