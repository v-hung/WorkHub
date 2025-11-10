using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Queries
{
	public class SearchWorkScheduleQuery : IRequest<Paginated<WorkScheduleDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchWorkScheduleQueryHandler : IRequestHandler<SearchWorkScheduleQuery, Paginated<WorkScheduleDto>>
	{
		private readonly IRepository<WorkSchedule, int> _repositoryService;

		public SearchWorkScheduleQueryHandler(IRepository<WorkSchedule, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<WorkScheduleDto>> Handle(SearchWorkScheduleQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<WorkScheduleDto, int>(query.Request);
		}
	}
}