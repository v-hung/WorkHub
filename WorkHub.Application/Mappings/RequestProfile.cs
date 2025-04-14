using AutoMapper;
using WorkHub.Application.DTOs.Requests;
using WorkHub.Application.Features.Requests.DTOs;
using WorkHub.Domain.Entities.Requests;

namespace WorkHub.Application.Mappings
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