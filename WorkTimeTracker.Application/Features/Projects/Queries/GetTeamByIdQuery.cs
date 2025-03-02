using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Services;
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
		private readonly IRepositoryService<Project, int> _repositoryService;

		public GetProjectByIdQueryHandler(IRepositoryService<Project, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<ProjectDto> Handle(GetProjectByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetAsync<ProjectDto, int>(query.Id);
		}
	}
}