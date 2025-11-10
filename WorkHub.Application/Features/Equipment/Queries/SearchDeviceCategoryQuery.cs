using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
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