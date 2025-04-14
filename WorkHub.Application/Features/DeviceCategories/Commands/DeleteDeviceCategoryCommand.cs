using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Devices.Commands
{
	public class DeleteDeviceCategoryCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteDeviceCategoryCommandHandler : IRequestHandler<DeleteDeviceCategoryCommand, int>
	{
		private readonly IRepository<DeviceCategory, int> _repository;

		public DeleteDeviceCategoryCommandHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<int> Handle(DeleteDeviceCategoryCommand command, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(command.Id);

			return command.Id;
		}
	}
}