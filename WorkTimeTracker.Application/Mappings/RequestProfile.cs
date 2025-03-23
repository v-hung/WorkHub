using AutoMapper;
using WorkTimeTracker.Application.DTOs.Requests;
using WorkTimeTracker.Domain.Entities.Requests;

namespace WorkTimeTracker.Application.Mappings
{
	public class RequestProfile : Profile
	{
		public RequestProfile()
		{
			CreateMap<Request, RequestDto>()
				.Include<LeaveRequest, LeaveRequestDto>()
				.Include<TimesheetRequest, TimesheetRequestDto>();

			CreateMap<LeaveRequest, LeaveRequestDto>().ReverseMap();
			CreateMap<TimesheetRequest, TimesheetRequestDto>().ReverseMap();

			CreateMap<Request, RequestMinimalDto>()
				.Include<LeaveRequest, LeaveRequestMinimalDto>()
				.Include<TimesheetRequest, TimesheetRequestMinimalDto>();

			CreateMap<LeaveRequest, LeaveRequestMinimalDto>().ReverseMap();
			CreateMap<TimesheetRequest, TimesheetRequestMinimalDto>().ReverseMap();
		}
	}
}