using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class GetAllDeviceQuery : IRequest<List<DeviceMinimalDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllDeviceQueryHandler : IRequestHandler<GetAllDeviceQuery, List<DeviceMinimalDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public GetAllDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<DeviceMinimalDto>> Handle(GetAllDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<DeviceMinimalDto>(v => query.Ids.Contains(v.Id));
		}
	}
}