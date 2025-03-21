using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class SearchDeviceQuery : IRequest<Paginated<DeviceMinimalDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchDeviceQueryHandler : IRequestHandler<SearchDeviceQuery, Paginated<DeviceMinimalDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public SearchDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceMinimalDto>> Handle(SearchDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceMinimalDto, int>(query.Request);
		}
	}
}