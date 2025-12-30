using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class GetDeviceByIdQuery : IRequest<DeviceDetailsDto>
	{
		public int Id;

		public GetDeviceByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetDeviceByIdQueryHandler : IRequestHandler<GetDeviceByIdQuery, DeviceDetailsDto>
	{
		private readonly IRepository<Device, int> _repository;

		public GetDeviceByIdQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceDetailsDto> Handle(GetDeviceByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetByIdAsync<DeviceDetailsDto, int>(query.Id);
		}
	}
}