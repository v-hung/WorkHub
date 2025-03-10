using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Repositories;
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
		private readonly IRepository<Project, int> _repository;

		public GetAllProjectQueryHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<Paginated<ProjectDto>> Handle(GetAllProjectQuery query, CancellationToken cancellationToken)
		{
			return await _repository.SearchAsync<ProjectDto>(query._request);
		}
	}
}