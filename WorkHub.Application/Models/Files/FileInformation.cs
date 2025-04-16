namespace WorkHub.Application.Models.Files
{
	public class FileInformation
	{
		public required string Name { get; set; }
		public required string Path { get; set; }
		public string? Extension { get; set; }
		public long Size { get; set; }
		public int ImageWidth { get; set; }
		public int ImageHeight { get; set; }

		public string FormatFileSize
		{
			get
			{
				const decimal scale = 1024;
				string[] orders = ["bytes", "KB", "MB", "GB", "TB"];

				decimal maxSize = Size;
				int order = 0;

				while (maxSize >= scale && order < orders.Length - 1)
				{
					maxSize /= scale;
					order++;
				}

				return $"{maxSize:0.##} {orders[order]}";
			}
		}
	}
}