using AutoMapper;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Features.WorkTimes.Commands;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Mappings
{
	public class WorkTimeProfile : Profile
	{
		public WorkTimeProfile()
		{
			CreateMap<WorkTime, WorkTimeDto>().ReverseMap();
			CreateMap<CreateEditWorkTimeCommand, WorkTime>().ReverseMap();
		}
	}
}