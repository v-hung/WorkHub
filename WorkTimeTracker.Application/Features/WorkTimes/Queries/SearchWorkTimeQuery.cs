using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.WorkTimes.Queries
{
	public class SearchWorkTimeQuery : IRequest<Paginated<WorkTimeDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchWorkTimeQueryHandler : IRequestHandler<SearchWorkTimeQuery, Paginated<WorkTimeDto>>
	{
		private readonly IRepository<WorkTime, int> _repositoryService;

		public SearchWorkTimeQueryHandler(IRepository<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<WorkTimeDto>> Handle(SearchWorkTimeQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<WorkTimeDto, int>(query.Request);
		}
	}
}