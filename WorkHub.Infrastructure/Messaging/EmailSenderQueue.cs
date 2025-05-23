using System.Threading.Channels;
using WorkHub.Application.Interfaces.Messaging;

namespace WorkHub.Infrastructure.Messaging
{
	public class EmailSenderQueue : IEmailSenderQueue
	{
		private readonly Channel<Func<CancellationToken, Task>> _queue;

		public EmailSenderQueue()
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