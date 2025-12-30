using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class GetAllDeviceQuery : IRequest<List<DeviceDetailsDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllDeviceQueryHandler : IRequestHandler<GetAllDeviceQuery, List<DeviceDetailsDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public GetAllDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<DeviceDetailsDto>> Handle(GetAllDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<DeviceDetailsDto>(v => query.Ids.Contains(v.Id));
		}
	}
}