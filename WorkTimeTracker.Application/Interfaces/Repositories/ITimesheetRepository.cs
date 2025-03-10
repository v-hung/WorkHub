namespace WorkTimeTracker.Application.Interfaces.Repositories
{
	public interface ITimesheetRepository
	{
		Task<D> GetTodayTimesheet<D>(Guid userId) where D : class;

		Task<D> GetMonthlyTimesheetsQuery<D>(Guid userId) where D : class;

		Task<D> PerformCheckIn<D>(Guid userId) where D : class;

		Task<D> PerformCheckOut<D>(Guid userId) where D : class;

	}
}