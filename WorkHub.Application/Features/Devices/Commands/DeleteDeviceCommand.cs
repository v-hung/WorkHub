using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Devices.Commands
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