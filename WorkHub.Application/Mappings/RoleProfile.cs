using AutoMapper;
using WorkHub.Application.DTOs.Identity;
using WorkHub.Application.Requests.Identity;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Mappings
{
	public class RoleProfile : Profile
	{
		public RoleProfile()
		{
			CreateMap<Role, RoleDto>().ReverseMap();
			CreateMap<Role, RoleFullDto>().ReverseMap();
			CreateMap<RoleCreateUpdateRequest, Role>().ReverseMap();
		}
	}
}