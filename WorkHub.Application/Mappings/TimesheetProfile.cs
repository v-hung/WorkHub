using AutoMapper;
using WorkHub.Application.DTOs.Work;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Mappings
{
	public class TimesheetProfile : Profile
	{
		public TimesheetProfile()
		{
			CreateMap<Timesheet, TimesheetReferenceDto>().ReverseMap();
			CreateMap<Timesheet, TimesheetDetailsDto>().ReverseMap();
		}
	}
}