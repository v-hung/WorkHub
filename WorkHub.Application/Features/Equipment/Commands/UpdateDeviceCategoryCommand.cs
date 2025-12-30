using System.ComponentModel.DataAnnotations;
using AutoMapper;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Commands
{
	public class UpdateDeviceCategoryCommand : IRequest<DeviceCategoryDetailsDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateDeviceCategoryCommand Request { get; set; }
	}

	public class UpdateDeviceCategoryCommandHandler : IRequestHandler<UpdateDeviceCategoryCommand, DeviceCategoryDetailsDto>
	{

		private readonly IRepository<DeviceCategory, int> _repository;
		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;

		public UpdateDeviceCategoryCommandHandler(IRepository<DeviceCategory, int> repository, IUnitOfWork unitOfWork, IMapper mapper)
		{
			_repository = repository;
			_unitOfWork = unitOfWork;
			_mapper = mapper;
		}

		public async Task<DeviceCategoryDetailsDto> Handle(UpdateDeviceCategoryCommand command, CancellationToken cancellationToken)
		{
			var category = await _repository.GetEntityByIdAsync<DeviceCategory, int>(command.Id);

			_mapper.Map(command.Request, category);

			await UpdateDevicesAsync(category, command.Request.DeviceIds, cancellationToken);

			await _unitOfWork.SaveChangesAsync(cancellationToken);

			return _mapper.Map<DeviceCategoryDetailsDto>(category);
		}

		private async Task UpdateDevicesAsync(DeviceCategory category, List<int> deviceIds, CancellationToken cancellationToken)
		{
			await _repository.LoadCollectionAsync(category, c => c.Devices);

			var newDevices = await _repository.GetEntityByIdsAsync<Device, int>(deviceIds);

			if (newDevices.Count != deviceIds.Count)
			{
				throw new ValidationException("Some device IDs are invalid");
			}

			category.Devices.Clear();
			foreach (var device in newDevices)
			{
				category.Devices.Add(device);
			}
		}
	}
}