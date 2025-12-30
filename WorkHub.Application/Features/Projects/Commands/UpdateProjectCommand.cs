using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Features.Projects.Commands
{
	public class UpdateProjectCommand : IRequest<ProjectDetailsDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateProjectCommand Request { get; set; }
	}

	public class UpdateProjectCommandHandler : IRequestHandler<UpdateProjectCommand, ProjectDetailsDto>
	{

		private readonly IRepository<Project, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public UpdateProjectCommandHandler(IRepository<Project, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<ProjectDetailsDto> Handle(UpdateProjectCommand command, CancellationToken cancellationToken)
		{
			var project = await _repository.GetEntityByIdAsync<Project, int>(command.Id);

			_mapper.Map(command.Request, project);

			await UpdateMembersAsync(project, command.Request.MemberIds, cancellationToken);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<ProjectDetailsDto>(project);
		}

		private async Task UpdateMembersAsync(Project project, List<Guid> memberIds, CancellationToken cancellationToken)
		{
			// Load current members if not loaded
			await _repository.LoadCollectionAsync(project, p => p.Members);

			// Get new members
			var newMembers = await _repository.GetEntityByIdsAsync<User, Guid>(memberIds);

			// Validate
			if (newMembers.Count != memberIds.Count)
			{
				throw new ValidationException("Some user IDs are invalid");
			}

			// Clear and add - Simple and clear
			project.Members.Clear();
			foreach (var member in newMembers)
			{
				project.Members.Add(member);
			}
		}
	}
}