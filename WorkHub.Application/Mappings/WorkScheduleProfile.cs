using AutoMapper;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Features.WorkSchedules.Commands;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Mappings
{
	public class WorkScheduleProfile : Profile
	{
		public WorkScheduleProfile()
		{
			CreateMap<WorkSchedule, WorkScheduleDto>().ReverseMap();
			CreateMap<CreateWorkScheduleCommand, WorkSchedule>().ReverseMap();
		}
	}
}