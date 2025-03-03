using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.WorkTimes.Queries
{
	public class GetAllWorkTimeQuery : IRequest<Paginated<WorkTimeDto>>
	{
		public PagedRequest _request { get; }

		public GetAllWorkTimeQuery(PagedRequest request)
		{
			_request = request;
		}
	}

	public class GetAllWorkTimeQueryHandler : IRequestHandler<GetAllWorkTimeQuery, Paginated<WorkTimeDto>>
	{
		private readonly IRepositoryService<WorkTime, int> _repositoryService;

		public GetAllWorkTimeQueryHandler(IRepositoryService<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<WorkTimeDto>> Handle(GetAllWorkTimeQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<WorkTimeDto>(query._request);
		}
	}
}