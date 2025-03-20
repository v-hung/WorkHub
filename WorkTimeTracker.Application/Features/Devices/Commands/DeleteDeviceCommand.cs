using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Commands
{
	public class DeleteDeviceCommand : IRequest<int>
	{

		[Required]
		public required int Id { get; set; }

	}

	public class DeleteDeviceCommandHandler : IRequestHandler<DeleteDeviceCommand, int>
	{
		private readonly IRepository<Device, int> _repository;

		public DeleteDeviceCommandHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<int> Handle(DeleteDeviceCommand command, CancellationToken cancellationToken)
		{
			await _repository.DeleteAsync(command.Id);

			return command.Id;
		}
	}
}