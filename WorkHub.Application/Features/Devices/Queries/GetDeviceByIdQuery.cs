using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Devices.Queries
{
	public class GetDeviceByIdQuery : IRequest<DeviceDto>
	{
		public int Id;

		public GetDeviceByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetDeviceByIdQueryHandler : IRequestHandler<GetDeviceByIdQuery, DeviceDto>
	{
		private readonly IRepository<Device, int> _repository;

		public GetDeviceByIdQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceDto> Handle(GetDeviceByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetByIdAsync<DeviceDto, int>(query.Id);
		}
	}
}