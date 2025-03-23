using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class GetAllDeviceCategoryQuery : IRequest<List<DeviceCategoryDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllDeviceCategoryQueryHandler : IRequestHandler<GetAllDeviceCategoryQuery, List<DeviceCategoryDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public GetAllDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<DeviceCategoryDto>> Handle(GetAllDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<DeviceCategoryDto>(v => query.Ids.Contains(v.Id));
		}
	}
}