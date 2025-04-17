using SkiaSharp;

namespace WorkHub.Application.Utils
{
	public static class AvatarGenerator
	{
		/// <summary>
		/// A set of nice colors to use for avatars.
		/// </summary>
		private static readonly SKColor[] NiceColors = [
			SKColors.SkyBlue,
			SKColors.SteelBlue,
			SKColors.CornflowerBlue,
			SKColors.MediumPurple,
			SKColors.OrangeRed,
			SKColors.SeaGreen,
			SKColors.Teal,
			SKColors.DarkCyan,
			SKColors.IndianRed,
			SKColors.SlateBlue,
		];

		public static byte[] GenerateAvatar(string fullName, int size = 64)
		{
			var initials = GetInitials(fullName);
			var backgroundColor = GetRandomColor();

			using var surface = SKSurface.Create(new SKImageInfo(size, size));
			var canvas = surface.Canvas;
			canvas.Clear(SKColors.Transparent);

			// Draw a square background
			var backgroundPaint = new SKPaint
			{
				IsAntialias = true,
				Color = backgroundColor,
				Style = SKPaintStyle.Fill
			};
			canvas.DrawRect(new SKRect(0, 0, size, size), backgroundPaint);

			// Font and paint for text
			var typeface = SKTypeface.FromFamilyName("Arial", SKFontStyle.Bold);
			var font = new SKFont(typeface, size / (initials.Length == 2 ? 2.3f : 2f));
			var textPaint = new SKPaint
			{
				IsAntialias = true,
				Color = SKColors.White
			};

			// Measure text to get bounds
			var textWidth = font.MeasureText(initials, out var textBounds);

			// Calculate the coordinates to the middle
			var x = size / 2f;
			var y = (size - textBounds.Height) / 2f - textBounds.Top;

			// Draw text
			canvas.DrawText(initials, x, y, SKTextAlign.Center, font, textPaint);

			using var image = surface.Snapshot();
			using var data = image.Encode(SKEncodedImageFormat.Png, 100);
			return data.ToArray();
		}

		private static string GetInitials(string fullName)
		{
			var parts = fullName.Split(' ', StringSplitOptions.RemoveEmptyEntries);
			return string.Concat(parts.Take(2).Select(p => char.ToUpper(p[0])));
		}

		private static SKColor GetRandomColor()
		{
			var random = new Random();
			return NiceColors[random.Next(NiceColors.Length)];
		}
	}
}