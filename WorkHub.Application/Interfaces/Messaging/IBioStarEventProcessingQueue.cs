namespace WorkHub.Application.Interfaces.Messaging
{
	public interface IBioStarEventProcessingQueue
	{
		void Enqueue(Func<CancellationToken, Task> task);

		Task<Func<CancellationToken, Task>> DequeueAsync(CancellationToken cancellationToken);
	}
}