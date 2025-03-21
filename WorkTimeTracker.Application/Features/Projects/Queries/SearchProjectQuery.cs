using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Features.Projects.Queries
{
	public class SearchProjectQuery : IRequest<Paginated<ProjectDto>>
	{
		public required PagedRequest Request { get; set; }
	}

	public class SearchProjectQueryHandler : IRequestHandler<SearchProjectQuery, Paginated<ProjectDto>>
	{
		private readonly IRepository<Project, int> _repository;

		public SearchProjectQueryHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<ProjectDto>> Handle(SearchProjectQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<ProjectDto, int>(query.Request);
		}
	}
}