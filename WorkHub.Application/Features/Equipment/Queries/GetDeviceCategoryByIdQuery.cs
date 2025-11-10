using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class GetDeviceCategoryByIdQuery : IRequest<DeviceCategoryDto>
	{
		public int Id;

		public GetDeviceCategoryByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetDeviceCategoryByIdQueryHandler : IRequestHandler<GetDeviceCategoryByIdQuery, DeviceCategoryDto>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public GetDeviceCategoryByIdQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceCategoryDto> Handle(GetDeviceCategoryByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetByIdAsync<DeviceCategoryDto, int>(query.Id);
		}
	}
}