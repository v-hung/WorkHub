using System.Threading.Channels;
using WorkTimeTracker.Application.Interfaces.Messaging;

namespace WorkTimeTracker.Infrastructure.Messaging
{
	public class EmailBackgroundQueue : IEmailBackgroundQueue
	{
		private readonly Channel<Func<CancellationToken, Task>> _queue;

		public EmailBackgroundQueue()
		{
			_queue = Channel.CreateUnbounded<Func<CancellationToken, Task>>();
		}

		public void QueueEmail(Func<CancellationToken, Task> emailTask)
		{
			if (emailTask == null) throw new ArgumentNullException(nameof(emailTask));
			_queue.Writer.TryWrite(emailTask);
		}

		public async Task<Func<CancellationToken, Task>> DequeueAsync(CancellationToken cancellationToken)
		{
			var emailTask = await _queue.Reader.ReadAsync(cancellationToken);
			return emailTask;
		}
	}
}