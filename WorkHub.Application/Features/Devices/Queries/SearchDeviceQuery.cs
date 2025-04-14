using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Devices.Queries
{
	public class SearchDeviceQuery : IRequest<Paginated<DeviceDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchDeviceQueryHandler : IRequestHandler<SearchDeviceQuery, Paginated<DeviceDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public SearchDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceDto>> Handle(SearchDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceDto, int>(query.Request);
		}
	}
}