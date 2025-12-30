using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.Projects.Queries
{
	public class GetProjectByIdQuery : IRequest<ProjectDetailsDto>
	{
		public int Id;

		public GetProjectByIdQuery(int id)
		{
			Id = id;
		}
	}

	public class GetProjectByIdQueryHandler : IRequestHandler<GetProjectByIdQuery, ProjectDetailsDto>
	{
		private readonly IRepository<Project, int> _repositoryService;

		public GetProjectByIdQueryHandler(IRepository<Project, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<ProjectDetailsDto> Handle(GetProjectByIdQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetByIdAsync<ProjectDetailsDto, int>(query.Id);
		}
	}
}