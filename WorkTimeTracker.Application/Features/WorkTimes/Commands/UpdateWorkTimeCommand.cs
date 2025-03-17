using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Time;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Constants.Timesheet;
using WorkTimeTracker.Domain.Entities.Time;

namespace WorkTimeTracker.Application.Features.WorkTimes.Commands
{
	public class UpdateWorkTimeCommand : IRequest<WorkTimeDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public CreateEditWorkTimeCommand Request { get; set; }

		public UpdateWorkTimeCommand(CreateEditWorkTimeCommand request)
		{
			Request = request;
		}
	}

	public class UpdateWorkTimeCommandHandler : IRequestHandler<UpdateWorkTimeCommand, WorkTimeDto>
	{

		private readonly IRepository<WorkTime, int> _repositoryService;

		public UpdateWorkTimeCommandHandler(IRepository<WorkTime, int> repositoryService)
		{
			_repositoryService = repositoryService;
		}

		public async Task<WorkTimeDto> Handle(UpdateWorkTimeCommand request, CancellationToken cancellationToken)
		{
			return await _repositoryService.CreateOrUpdateAsync<WorkTimeDto, int>(request.Id, request);
		}
	}
}