using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Devices.Commands
{
	public class CreateDeviceCategoryCommand : IRequest<DeviceCategoryDto>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		// Navigation property

		public List<int> DeviceIds { get; set; } = [];
	}

	public class CreateDeviceCategoryCommandHandler : IRequestHandler<CreateDeviceCategoryCommand, DeviceCategoryDto>
	{

		private readonly IRepository<DeviceCategory, int> _repository;

		public CreateDeviceCategoryCommandHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceCategoryDto> Handle(CreateDeviceCategoryCommand command, CancellationToken cancellationToken)
		{
			return await _repository.CreateAsync<DeviceCategoryDto>(command,
			[
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Devices, command.DeviceIds)
			]);
		}
	}
}