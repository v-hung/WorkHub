using MediatR;
using WorkHub.Application.DTOs.Time;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Time;

namespace WorkHub.Application.Features.WorkTimes.Queries
{
	public class GetAllWorkTimeQuery : IRequest<List<WorkTimeDto>>
	{
		public List<int> Ids { get; set; } = [];
	}

	public class GetAllWorkTimeQueryHandler : IRequestHandler<GetAllWorkTimeQuery, List<WorkTimeDto>>
	{
		private readonly IRepository<WorkTime, int> _repositoryService;

		public GetAllWorkTimeQueryHandler(IRepository<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<List<WorkTimeDto>> Handle(GetAllWorkTimeQuery query, CancellationToken cancellationToken)
		{
			return await _repositoryService.GetAllAsync<WorkTimeDto>(v => query.Ids.Contains(v.Id));
		}
	}
}