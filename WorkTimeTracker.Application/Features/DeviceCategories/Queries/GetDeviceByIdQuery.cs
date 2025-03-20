using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
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