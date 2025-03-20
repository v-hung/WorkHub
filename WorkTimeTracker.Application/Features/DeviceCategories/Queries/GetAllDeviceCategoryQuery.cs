using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Queries
{
	public class GetAllDeviceCategoryQuery : IRequest<Paginated<DeviceCategoryMinimalDto>>
	{
		public PagedRequest Request { get; set; }

		public GetAllDeviceCategoryQuery(PagedRequest request)
		{
			Request = request;
		}
	}

	public class GetAllDeviceCategoryQueryHandler : IRequestHandler<GetAllDeviceCategoryQuery, Paginated<DeviceCategoryMinimalDto>>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public GetAllDeviceCategoryQueryHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<DeviceCategoryMinimalDto>> Handle(GetAllDeviceCategoryQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<DeviceCategoryMinimalDto, int>(query.Request);
		}
	}
}