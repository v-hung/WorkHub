using AutoMapper;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Mappings
{
	public class TimesheetProfile : Profile
	{
		public TimesheetProfile()
		{
			CreateMap<Timesheet, TimesheetMinimalDto>().ReverseMap();
			CreateMap<Timesheet, TimesheetDto>().ReverseMap();
		}
	}
}