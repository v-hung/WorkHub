using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.Features.Projects.Commands
{
	public class CreateProjectCommand : IRequest<ProjectDetailsDto>
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

		public List<Guid> MemberIds { get; set; } = [];
	}

	public class CreateProjectCommandHandler : IRequestHandler<CreateProjectCommand, ProjectDetailsDto>
	{

		private readonly IRepository<Project, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public CreateProjectCommandHandler(IRepository<Project, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<ProjectDetailsDto> Handle(CreateProjectCommand command, CancellationToken cancellationToken)
		{
			var project = _mapper.Map<Project>(command);

			await _repository.AddAsync(project);

			await UpdateMembersAsync(project, command.MemberIds, cancellationToken);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<ProjectDetailsDto>(project);
		}

		private async Task UpdateMembersAsync(Project project, List<Guid> memberIds, CancellationToken cancellationToken)
		{
			if (memberIds.Any())
			{
				var members = await _repository.GetEntityByIdsAsync<User, Guid>(memberIds);

				if (members.Count != memberIds.Count)
				{
					throw new ValidationException("Some user IDs are invalid");
				}

				foreach (var member in members)
				{
					project.Members.Add(member);
				}
			}
		}
	}
}