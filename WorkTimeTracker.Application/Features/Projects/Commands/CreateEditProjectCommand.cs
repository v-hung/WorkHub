using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Work;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Work;
using WorkTimeTracker.Domain.Enums;

namespace WorkTimeTracker.Application.Features.Projects.Commands
{
	public class CreateEditProjectCommand : IRequest<ProjectDto>
	{
		public int Id { get; set; } = default;

		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		public ProjectStatus Status { get; set; }

		// Navigation properties

		public int? TeamId { get; set; }

		public Guid? ManagerId { get; set; }

		public IList<Guid> MemberIds { get; set; } = [];
	}

	public class CreateEditProjectCommandHandler : IRequestHandler<CreateEditProjectCommand, ProjectDto>
	{

		private readonly IRepository<Project, int> _repository;

		public CreateEditProjectCommandHandler(IRepository<Project, int> repository)
		{
			_repository = repository;
		}

		public async Task<ProjectDto> Handle(CreateEditProjectCommand request, CancellationToken cancellationToken)
		{
			return await _repository.CreateOrUpdateAsync<ProjectDto, int>(request.Id, request, [
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Members, request.MemberIds, request.Id)
			]);
		}
	}
}