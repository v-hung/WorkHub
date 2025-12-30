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
	public class CreateTeamCommand : IRequest<TeamDetailsDto>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public int TotalMembers { get; set; } = 0;

		public int CompletedProjects { get; set; } = 0;

		public int ActiveProjects { get; set; } = 0;

		// Navigation properties

		public Guid? ManagerId { get; set; }

		public List<Guid> MemberIds { get; set; } = [];

		public List<int> ProjectIds { get; set; } = [];
	}

	public class CreateTeamCommandHandler : IRequestHandler<CreateTeamCommand, TeamDetailsDto>
	{

		private readonly IRepository<Team, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public CreateTeamCommandHandler(IRepository<Team, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<TeamDetailsDto> Handle(CreateTeamCommand command, CancellationToken cancellationToken)
		{

			Team team = _mapper.Map<Team>(command);

			await _repository.AddAsync(team);

			await UpdateMembersAsync(team, command.MemberIds, cancellationToken);

			await UpdateProjectsAsync(team, command.ProjectIds, cancellationToken);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<TeamDetailsDto>(team);
		}

		private async Task UpdateMembersAsync(Team team, List<Guid> memberIds, CancellationToken cancellationToken)
		{
			if (memberIds.Count != 0)
			{
				var members = await _repository.GetEntityByIdsAsync<User, Guid>(memberIds);

				if (members.Count != memberIds.Count)
				{
					throw new ValidationException("Some user IDs are invalid");
				}

				foreach (var member in members)
				{
					team.Members.Add(member);
				}
			}
		}

		private async Task UpdateProjectsAsync(Team team, List<int> projectIds, CancellationToken cancellationToken)
		{
			if (projectIds.Count != 0)
			{
				var projects = await _repository.GetEntityByIdsAsync<Project, int>(projectIds);

				if (projects.Count != projectIds.Count)
				{
					throw new ValidationException("Some project IDs are invalid");
				}

				foreach (var project in projects)
				{
					team.Projects.Add(project);
				}
			}
		}
	}
}