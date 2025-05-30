using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.Features.Projects.Commands
{
	public class CreateProjectCommand : IRequest<ProjectDto>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public DateTime? StartDate { get; set; }

		public DateTime? EndDate { get; set; }

		public ProjectStatus Status { get; set; } = ProjectStatus.ACTIVE;

		// Navigation properties

		public int? TeamId { get; set; }

		public Guid? ManagerId { get; set; }

		public IList<Guid> MemberIds { get; set; } = [];
	}

	public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, ProjectDto>
	{

		private readonly IRepository<Project, int> _repository;

		public CreateProjectCommandHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<ProjectDto> Handle(CreateProjectCommand command, CancellationToken cancellationToken)
		{
			return await _repository.CreateAsync<ProjectDto>(command, [
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Members, command.MemberIds)
			]);
		}
	}
}