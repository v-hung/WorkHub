using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Devices.Queries
{
	public class GetAllDeviceQuery : IRequest<List<DeviceDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllDeviceQueryHandler : IRequestHandler<GetAllDeviceQuery, List<DeviceDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public GetAllDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<DeviceDto>> Handle(GetAllDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<DeviceDto>(v => query.Ids.Contains(v.Id));
		}
	}
}