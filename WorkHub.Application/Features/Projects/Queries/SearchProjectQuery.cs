using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.Projects.Queries
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