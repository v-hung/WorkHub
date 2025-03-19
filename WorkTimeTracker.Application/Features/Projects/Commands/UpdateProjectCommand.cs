using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Work;

namespace WorkTimeTracker.Application.Features.Projects.Commands
{
	public class UpdateProjectCommand : IRequest<ProjectDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateProjectCommand Request { get; set; }
	}

	public class UpdateProjectCommandHandler : IRequestHandler<UpdateProjectCommand, ProjectDto>
	{

		private readonly IRepository<Project, int> _repository;

		public UpdateProjectCommandHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<ProjectDto> Handle(UpdateProjectCommand command, CancellationToken cancellationToken)
		{
			return await _repository.UpdateAsync<ProjectDto, int>(command.Id, command.Request, [
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Members, command.Request.MemberIds)
			]);
		}
	}
}