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
			// Minimal get api dto
			CreateMap<Request, RequestMinimalDto>()
				.Include<LeaveRequest, LeaveRequestMinimalDto>()
				.Include<TimesheetRequest, TimesheetRequestMinimalDto>();

			CreateMap<LeaveRequest, LeaveRequestMinimalDto>().ReverseMap();
			CreateMap<TimesheetRequest, TimesheetRequestMinimalDto>().ReverseMap();

			// Get api dto
			CreateMap<Request, RequestDto>()
				.Include<LeaveRequest, LeaveRequestDto>()
				.Include<TimesheetRequest, TimesheetRequestDto>();

			CreateMap<LeaveRequest, LeaveRequestDto>().ReverseMap();
			CreateMap<TimesheetRequest, TimesheetRequestDto>().ReverseMap();

			// Create api dto
			CreateMap<Request, CreateRequestDto>()
				.Include<LeaveRequest, CreateLeaveRequestDto>()
				.Include<TimesheetRequest, CreateTimesheetRequestDto>();

			CreateMap<LeaveRequest, CreateLeaveRequestDto>().ReverseMap();
			CreateMap<TimesheetRequest, CreateTimesheetRequestDto>().ReverseMap();
		}
	}
}