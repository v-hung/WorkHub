using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.Features.Equipment.Commands
{
	public class CreateDeviceCommand : IRequest<DeviceDto>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		public string? Location { get; set; }

		public DeviceStatus Status { get; set; } = DeviceStatus.NEW;

		// Navigation property

		public Guid? AssignedUserId { get; set; }

		public List<int> DeviceCategoryIds { get; set; } = [];
	}

	public class CreateDeviceCommandHandler : IRequestHandler<CreateDeviceCommand, DeviceDto>
	{

		private readonly IRepository<Device, int> _repository;

		public CreateDeviceCommandHandler(IRepository<Device, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceDto> Handle(CreateDeviceCommand command, CancellationToken cancellationToken)
		{
			return await _repository.CreateAsync<DeviceDto>(command,
			[
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.DeviceCategories, command.DeviceCategoryIds)
			]);
		}
	}
}