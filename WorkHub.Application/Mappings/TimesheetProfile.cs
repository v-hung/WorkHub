using AutoMapper;
using WorkHub.Application.DTOs.Work;
using WorkHub.Domain.Entities.Work;

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