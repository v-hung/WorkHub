using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Domain.Entities.Identity;
using WorkHub.Domain.Enums;

namespace WorkHub.Application.Features.Equipment.Commands
{
	public class CreateDeviceCommand : IRequest<DeviceDetailsDto>
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

	public class CreateDeviceCommandHandler : IRequestHandler<CreateDeviceCommand, DeviceDetailsDto>
	{

		private readonly IRepository<Device, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public CreateDeviceCommandHandler(IRepository<Device, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<DeviceDetailsDto> Handle(CreateDeviceCommand command, CancellationToken cancellationToken)
		{
			var device = _mapper.Map<Device>(command);

			await _repository.AddAsync(device);

			await UpdateDeviceCategoriesAsync(device, command.DeviceCategoryIds, cancellationToken);

			if (command.AssignedUserId.HasValue)
			{
				var user = await _repository.GetEntityByIdAsync<User, Guid>(command.AssignedUserId.Value);
				device.AssignedUser = user;
			}

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<DeviceDetailsDto>(device);
		}

		private async Task UpdateDeviceCategoriesAsync(Device device, List<int> deviceCategoryIds, CancellationToken cancellationToken)
		{
			if (deviceCategoryIds.Count != 0)
			{
				var categories = await _repository.GetEntityByIdsAsync<DeviceCategory, int>(deviceCategoryIds);

				if (categories.Count != deviceCategoryIds.Count)
				{
					throw new ValidationException("Some device category IDs are invalid");
				}

				foreach (var category in categories)
				{
					device.DeviceCategories.Add(category);
				}
			}
		}
	}
}