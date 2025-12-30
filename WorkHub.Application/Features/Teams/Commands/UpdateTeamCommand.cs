using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Organization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Entities.Organization;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.Teams.Commands
{
	public class UpdateTeamCommand : IRequest<TeamDetailsDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateTeamCommand Request { get; set; }
	}

	public class UpdateTeamCommandHandler : IRequestHandler<UpdateTeamCommand, TeamDetailsDto>
	{

		private readonly IRepository<Team, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public UpdateTeamCommandHandler(IRepository<Team, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<TeamDetailsDto> Handle(UpdateTeamCommand command, CancellationToken cancellationToken)
		{
			var team = await _repository.GetEntityByIdAsync<Team, int>(command.Id);

			_mapper.Map(command.Request, team);

			await UpdateMembersAsync(team, command.Request.MemberIds, cancellationToken);

			await UpdateProjectsAsync(team, command.Request.ProjectIds, cancellationToken);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<TeamDetailsDto>(team);
		}

		private async Task UpdateMembersAsync(Team team, List<Guid> memberIds, CancellationToken cancellationToken)
		{
			// Load current members if not loaded
			await _repository.LoadCollectionAsync(team, t => t.Members);

			// Get new members
			var newMembers = await _repository.GetEntityByIdsAsync<User, Guid>(memberIds);

			// Validate
			if (newMembers.Count != memberIds.Count)
			{
				throw new ValidationException("Some user IDs are invalid");
			}

			// Clear and add - Simple and clear
			team.Members.Clear();
			foreach (var member in newMembers)
			{
				team.Members.Add(member);
			}
		}

		private async Task UpdateProjectsAsync(Team team, List<int> projectIds, CancellationToken cancellationToken)
		{
			await _repository.LoadCollectionAsync(team, t => t.Projects);

			var newProjects = await _repository.GetEntityByIdsAsync<Project, int>(projectIds);

			if (newProjects.Count != projectIds.Count)
			{
				throw new ValidationException("Some project IDs are invalid");
			}

			team.Projects.Clear();
			foreach (var project in newProjects)
			{
				team.Projects.Add(project);
			}
		}
	}
}