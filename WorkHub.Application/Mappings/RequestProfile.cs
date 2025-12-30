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
			CreateMap<Request, RequestCombinedReferenceDto>()
				.Include<LeaveRequest, RequestCombinedReferenceDto>()
				.Include<TimesheetAdjustmentRequest, RequestCombinedReferenceDto>();

			// Derived type mappings
			CreateMap<LeaveRequest, RequestCombinedReferenceDto>();
			CreateMap<TimesheetAdjustmentRequest, RequestCombinedReferenceDto>();

			// Same for the detailed DTO
			CreateMap<Request, RequestCombinedDetailsDto>()
				.Include<LeaveRequest, RequestCombinedDetailsDto>()
				.Include<TimesheetAdjustmentRequest, RequestCombinedDetailsDto>();

			CreateMap<LeaveRequest, RequestCombinedDetailsDto>();
			CreateMap<TimesheetAdjustmentRequest, RequestCombinedDetailsDto>();

			// Create API DTOs
			CreateMap<CreateRequestDto, Request>()
				.Include<CreateLeaveRequestDto, LeaveRequest>()
				.Include<CreateTimesheetAdjustmentRequestDto, TimesheetAdjustmentRequest>();

			CreateMap<CreateLeaveRequestDto, LeaveRequest>().ReverseMap();
			CreateMap<CreateTimesheetAdjustmentRequestDto, TimesheetAdjustmentRequest>().ReverseMap();
		}
	}
}