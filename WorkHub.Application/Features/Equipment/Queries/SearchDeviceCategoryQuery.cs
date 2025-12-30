using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Queries
{
	public class SearchDeviceCategoryQuery : IRequest<Paginated<DeviceCategoryDetailsDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchDeviceCategoryQueryHandler : IRequestHandler<SearchDeviceCategoryQuery, Paginated<DeviceCategoryDetailsDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public SearchDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceCategoryDetailsDto>> Handle(SearchDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceCategoryDetailsDto, int>(query.Request);
		}
	}
}