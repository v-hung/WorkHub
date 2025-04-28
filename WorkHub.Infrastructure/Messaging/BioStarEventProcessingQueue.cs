using System.Threading.Channels;
using WorkHub.Application.Interfaces.Messaging;

namespace WorkHub.Infrastructure.Messaging
{
	public class BioStarEventProcessingQueue : IBioStarEventProcessingQueue
	{
		private readonly Channel<Func<CancellationToken, Task>> _queue;

		public BioStarEventProcessingQueue()
		{
			_queue = Channel.CreateUnbounded<Func<CancellationToken, Task>>();
		}

		public void Enqueue(Func<CancellationToken, Task> task)
		{
			if (task == null) throw new ArgumentNullException(nameof(task));
			_queue.Writer.TryWrite(task);
		}

		public async Task<Func<CancellationToken, Task>> DequeueAsync(CancellationToken cancellationToken)
		{
			var task = await _queue.Reader.ReadAsync(cancellationToken);
			return task;
		}
	}
}