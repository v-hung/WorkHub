using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class GetDeviceCategoryByIdQuery : IRequest<DeviceCategoryDetailsDto>
	{
		public int Id;

		public GetDeviceCategoryByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetDeviceCategoryByIdQueryHandler : IRequestHandler<GetDeviceCategoryByIdQuery, DeviceCategoryDetailsDto>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public GetDeviceCategoryByIdQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceCategoryDetailsDto> Handle(GetDeviceCategoryByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetByIdAsync<DeviceCategoryDetailsDto, int>(query.Id);
		}
	}
}