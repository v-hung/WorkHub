using MediatR;
using WorkHub.Application.DTOs.Work;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Work;

namespace WorkHub.Application.Features.WorkSchedules.Queries
{
	public class GetAllWorkScheduleQuery : IRequest<List<WorkScheduleDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllWorkScheduleQueryHandler : IRequestHandler<GetAllWorkScheduleQuery, List<WorkScheduleDto>>
	{
		private readonly IRepository<WorkSchedule, int> _repositoryService;

		public GetAllWorkScheduleQueryHandler(IRepository<WorkSchedule, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<List<WorkScheduleDto>> Handle(GetAllWorkScheduleQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetAllAsync<WorkScheduleDto>(v => query.Ids.Contains(v.Id));
		}
	}
}