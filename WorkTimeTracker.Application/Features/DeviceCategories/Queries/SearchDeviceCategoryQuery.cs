using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class SearchDeviceCategoryQuery : IRequest<Paginated<DeviceCategoryDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchDeviceCategoryQueryHandler : IRequestHandler<SearchDeviceCategoryQuery, Paginated<DeviceCategoryDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public SearchDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceCategoryDto>> Handle(SearchDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceCategoryDto, int>(query.Request);
		}
	}
}