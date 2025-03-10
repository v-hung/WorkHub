using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Features.Projects.Queries
{
	public class GetProjectByIdQuery : IRequest<ProjectDto>
	{
		public int Id;

		public GetProjectByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, ProjectDto>
	{
		private readonly IRepository<Project, int> _repositoryService;

		public GetProjectByIdQueryHandler(IRepository<Project, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<ProjectDto> Handle(GetProjectByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetByIdAsync<ProjectDto, int>(query.Id);
		}
	}
}