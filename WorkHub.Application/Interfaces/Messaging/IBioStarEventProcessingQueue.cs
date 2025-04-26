namespace WorkHub.Application.Interfaces.Messaging
{
	public interface IBioStarEventProcessingQueue
	{
		void Queue(Func<CancellationToken, Task> emailTask);

		Task<Func<CancellationToken, Task>> DequeueAsync(CancellationToken cancellationToken);
	}
}