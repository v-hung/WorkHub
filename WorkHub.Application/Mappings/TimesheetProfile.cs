using AutoMapper;
using WorkHub.Application.DTOs.Time;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Mappings
{
	public class TimesheetProfile : Profile
	{
		public TimesheetProfile()
		{
			CreateMap<Timesheet, TimesheetMinimalDto>().ReverseMap();
			CreateMap<Timesheet, TimesheetDto>().ReverseMap();
			CreateMap<Timesheet, TimesheetFullDto>().ReverseMap();
		}
	}
}