using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.WorkTimes.Queries
{
	public class GetAllWorkTimeQuery : IRequest<Paginated<WorkTimeDto>>
	{
		public PagedRequest Request { get; }

		public GetAllWorkTimeQuery(PagedRequest request)
		{
			Request = request;
		}
	}

	public class GetAllWorkTimeQueryHandler : IRequestHandler<GetAllWorkTimeQuery, Paginated<WorkTimeDto>>
	{
		private readonly IRepository<WorkTime, int> _repositoryService;

		public GetAllWorkTimeQueryHandler(IRepository<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<WorkTimeDto>> Handle(GetAllWorkTimeQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<WorkTimeDto, int>(query.Request);
		}
	}
}