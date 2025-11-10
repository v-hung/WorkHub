using System.ComponentModel.DataAnnotations;
using MediatR;
using WorkHub.Application.DTOs.Equipment;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Domain.Entities.Equipment;

namespace WorkHub.Application.Features.Equipment.Commands
{
	public class UpdateDeviceCategoryCommand : IRequest<DeviceCategoryDto>
	{
		[Required]
		public int Id { get; set; }

		[Required]
		public required CreateDeviceCategoryCommand Request { get; set; }
	}

	public class UpdateDeviceCategoryCommandHandler : IRequestHandler<UpdateDeviceCategoryCommand, DeviceCategoryDto>
	{

		private readonly IRepository<DeviceCategory, int> _repository;

		public UpdateDeviceCategoryCommandHandler(IRepository<DeviceCategory, int> repository)
		{
			_repository = repository;
		}

		public async Task<DeviceCategoryDto> Handle(UpdateDeviceCategoryCommand command, CancellationToken cancellationToken)
		{
			return await _repository.UpdateAsync<DeviceCategoryDto, int>(command.Id, command.Request,
			[
				async t => await _repository.UpdateRelatedEntitiesAsync(t, t => t.Devices, command.Request.DeviceIds, command.Id)
			]);
		}
	}
}