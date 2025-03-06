using AutoMapper;
using WorkTimeTracker.Application.DTOs.Identity;
using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Application.Mappings
{
	public class RoleProfile : Profile
	{
		public RoleProfile()
		{
			CreateMap<Role, RoleDto>().ReverseMap();
		}
	}
}