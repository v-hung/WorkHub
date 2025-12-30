using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class SearchDeviceQuery : IRequest<Paginated<DeviceDetailsDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchDeviceQueryHandler : IRequestHandler<SearchDeviceQuery, Paginated<DeviceDetailsDto>>
	{
		private readonly IRepository<Device, int> _repository;

		public SearchDeviceQueryHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceDetailsDto>> Handle(SearchDeviceQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceDetailsDto, int>(query.Request);
		}
	}
}