using AutoMapper;
using WorkTimeTracker.Server.Dto.Time;
using WorkTimeTracker.Server.Models.Time;

namespace WorkTimeTracker.Server.Mappings
{
	public class WorkTimeProfile : Profile
	{
		public WorkTimeProfile()
		{
			CreateMap<WorkTime, WorkTimeDto>().ReverseMap();
		}
	}
}