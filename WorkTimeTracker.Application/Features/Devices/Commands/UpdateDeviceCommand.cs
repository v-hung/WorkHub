using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkTimeTracker.Application.DTOs.Equipment;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Domain.Entities.Equipment;

namespace WorkTimeTracker.Application.Features.Devices.Commands
{
	public class UpdateDeviceCommand : IRequest<DeviceDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateDeviceCommand Request { get; set; }
	}

	public class UpdateDeviceCommandHandler : IRequestHandler<UpdateDeviceCommand, DeviceDto>
	{

		private readonly IRepository<Device, int> _repository;

		public UpdateDeviceCommandHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceDto> Handle(UpdateDeviceCommand command, CancellationToken cancellationToken)
		{
			return await _repository.UpdateAsync<DeviceDto, int>(command.Id, command.Request,
			[
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.DeviceCategories, command.Request.DeviceCategoryIds, command.Id)
			]);
		}
	}
}