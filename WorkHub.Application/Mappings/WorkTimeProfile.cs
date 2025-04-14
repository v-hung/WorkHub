using AutoMapper;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Features.WorkTimes.Commands;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Mappings
{
	public class WorkTimeProfile : Profile
	{
		public WorkTimeProfile()
		{
			CreateMap<WorkTime, WorkTimeDto>().ReverseMap();
			CreateMap<CreateWorkTimeCommand, WorkTime>().ReverseMap();
		}
	}
}