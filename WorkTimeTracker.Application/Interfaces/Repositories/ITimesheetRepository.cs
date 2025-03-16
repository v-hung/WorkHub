namespace WorkTimeTracker.Application.Interfaces.Repositories
{
	public interface ITimesheetRepository
	{
		Task<D?> GetTodayTimesheet<D>(string userId) where D : class;

		Task<List<D>> GetCurrentUserMonthlyTimesheets<D>(string userId, int month, int year) where D : class;

		Task<List<D>> GetMonthlyTimesheets<D>(int month, int year) where D : class;

		Task<D> PerformCheckIn<D>(string userId) where D : class;

		Task<D> PerformCheckOut<D>(string userId) where D : class;

	}
}