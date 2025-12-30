using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;
using WorkHub.Domain.Entities.Misc;
using WorkHub.Domain.Entities.Identity;

namespace WorkHub.Application.Features.Equipment.Commands
{
	public class UpdateDeviceCommand : IRequest<DeviceDetailsDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateDeviceCommand Request { get; set; }
	}

	public class UpdateDeviceCommandHandler : IRequestHandler<UpdateDeviceCommand, DeviceDetailsDto>
	{

		private readonly IRepository<Device, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public UpdateDeviceCommandHandler(IRepository<Device, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<DeviceDetailsDto> Handle(UpdateDeviceCommand command, CancellationToken cancellationToken)
		{
			var device = await _repository.GetEntityByIdAsync<Device, int>(command.Id);

			_mapper.Map(command.Request, device);

			await UpdateDeviceCategoriesAsync(device, command.Request.DeviceCategoryIds, cancellationToken);

			if (command.Request.AssignedUserId.HasValue)
			{
				var user = await _repository.GetEntityByIdAsync<User, Guid>(command.Request.AssignedUserId.Value);
				device.AssignedUser = user;
			}
			else
			{
				device.AssignedUser = null;
			}

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<DeviceDetailsDto>(device);
		}

		private async Task UpdateDeviceCategoriesAsync(Device device, List<int> deviceCategoryIds, CancellationToken cancellationToken)
		{
			await _repository.LoadCollectionAsync(device, d => d.DeviceCategories);

			var newCategories = await _repository.GetEntityByIdsAsync<DeviceCategory, int>(deviceCategoryIds);

			if (newCategories.Count != deviceCategoryIds.Count)
			{
				throw new ValidationException("Some device category IDs are invalid");
			}

			device.DeviceCategories.Clear();
			foreach (var category in newCategories)
			{
				device.DeviceCategories.Add(category);
			}
		}
	}
}