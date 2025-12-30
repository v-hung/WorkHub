using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class GetAllDeviceCategoryQuery : IRequest<List<DeviceCategoryDetailsDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllDeviceCategoryQueryHandler : IRequestHandler<GetAllDeviceCategoryQuery, List<DeviceCategoryDetailsDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public GetAllDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<DeviceCategoryDetailsDto>> Handle(GetAllDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<DeviceCategoryDetailsDto>(v => query.Ids.Contains(v.Id));
		}
	}
}