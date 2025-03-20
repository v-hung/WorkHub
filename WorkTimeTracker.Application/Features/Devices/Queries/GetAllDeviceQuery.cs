using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class GetAllDeviceQuery : IRequest<Paginated<DeviceMinimalDto>>
	{
		public PagedRequest Request { get; set; }

		public GetAllDeviceQuery(PagedRequest request)
		{
			Request = request;
		}
	}

	public class GetAllDeviceQueryHandler : IRequestHandler<GetAllDeviceQuery, Paginated<DeviceMinimalDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public GetAllDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceMinimalDto>> Handle(GetAllDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceMinimalDto, int>(query.Request);
		}
	}
}