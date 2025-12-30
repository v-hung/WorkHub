using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Commands
{
	public class CreateDeviceCategoryCommand : IRequest<DeviceCategoryDetailsDto>
	{
		[Required]
		public required string Name { get; set; }

		public string? Description { get; set; }

		// Navigation property

		public List<int> DeviceIds { get; set; } = [];
	}

	public class CreateDeviceCategoryCommandHandler : IRequestHandler<CreateDeviceCategoryCommand, DeviceCategoryDetailsDto>
	{

		private readonly IRepository<DeviceCategory, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public CreateDeviceCategoryCommandHandler(IRepository<DeviceCategory, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<DeviceCategoryDetailsDto> Handle(CreateDeviceCategoryCommand command, CancellationToken cancellationToken)
		{
			var category = _mapper.Map<DeviceCategory>(command);

			await _repository.AddAsync(category);

			await UpdateDevicesAsync(category, command.DeviceIds, cancellationToken);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<DeviceCategoryDetailsDto>(category);
		}

		private async Task UpdateDevicesAsync(DeviceCategory category, List<int> deviceIds, CancellationToken cancellationToken)
		{
			if (deviceIds.Count != 0)
			{
				var devices = await _repository.GetEntityByIdsAsync<Device, int>(deviceIds);

				if (devices.Count != deviceIds.Count)
				{
					throw new ValidationException("Some device IDs are invalid");
				}

				foreach (var device in devices)
				{
					category.Devices.Add(device);
				}
			}
		}
	}
}