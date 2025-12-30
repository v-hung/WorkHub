using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.Projects.Queries
{
	public class GetAllProjectQuery : IRequest<List<ProjectDetailsDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllProjectQueryHandler : IRequestHandler<GetAllProjectQuery, List<ProjectDetailsDto>>
	{
		private readonly IRepository<Project, int> _repository;

		public GetAllProjectQueryHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<List<ProjectDetailsDto>> Handle(GetAllProjectQuery query, CancellationToken cancellationToken)
		{
			return await _repository.GetAllAsync<ProjectDetailsDto>(v => query.Ids.Contains(v.Id));
		}
	}
}