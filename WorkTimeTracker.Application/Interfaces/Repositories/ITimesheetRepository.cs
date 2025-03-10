using WorkTimeTracker.Domain.Entities.Identity;

namespace WorkTimeTracker.Application.Interfaces.Repositories
{
	public interface ITimesheetRepository
	{
		Task<D> GetTodayTimesheet<D>(User user) where D : class;

		Task<D> PerformCheckIn<D>(User user) where D : class;

		Task<D> PerformCheckOut<D>(User user) where D : class;

	}
}