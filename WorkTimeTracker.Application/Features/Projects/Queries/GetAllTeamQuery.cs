using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Services;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Features.Projects.Queries
{
	public class GetAllProjectQuery : IRequest<Paginated<ProjectDto>>
	{
		public PagedRequest _request { get; }

		public GetAllProjectQuery(PagedRequest request)
		{
			_request = request;
		}
	}

	public class GetAllProjectQueryHandler : IRequestHandler<GetAllProjectQuery, Paginated<ProjectDto>>
	{
		private readonly IRepositoryService<Project, int> _repositoryService;

		public GetAllProjectQueryHandler(IRepositoryService<Project, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<Paginated<ProjectDto>> Handle(GetAllProjectQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.SearchAsync<ProjectDto>(query._request);
		}
	}
}