namespace WorkHub.Application.Interfaces.Messaging
{
	public interface IEmailSenderQueue
	{
		void QueueEmail(Func<CancellationToken, Task> emailTask);

		Task<Func<CancellationToken, Task>> DequeueAsync(CancellationToken cancellationToken);
	}
}