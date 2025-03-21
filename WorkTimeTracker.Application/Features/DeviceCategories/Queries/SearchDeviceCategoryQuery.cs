using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class SearchDeviceCategoryQuery : IRequest<Paginated<DeviceCategoryMinimalDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchDeviceCategoryQueryHandler : IRequestHandler<SearchDeviceCategoryQuery, Paginated<DeviceCategoryMinimalDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public SearchDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceCategoryMinimalDto>> Handle(SearchDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceCategoryMinimalDto, int>(query.Request);
		}
	}
}