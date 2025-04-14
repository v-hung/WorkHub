using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Features.WorkTimes.Queries
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