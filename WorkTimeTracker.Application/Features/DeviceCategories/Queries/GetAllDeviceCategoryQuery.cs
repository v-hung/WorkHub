using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class GetAllDeviceCategoryQuery : IRequest<List<DeviceCategoryMinimalDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllDeviceCategoryQueryHandler : IRequestHandler<GetAllDeviceCategoryQuery, List<DeviceCategoryMinimalDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public GetAllDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<DeviceCategoryMinimalDto>> Handle(GetAllDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<DeviceCategoryMinimalDto>(v => query.Ids.Contains(v.Id));
		}
	}
}