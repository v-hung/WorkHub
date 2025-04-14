using Microsoft.AspNetCore.Hosting;
using WorkHub.Application.Models.Files;
using WorkHub.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using SkiaSharp;

namespace WorkHub.Infrastructure.Services
{
	public class UploadFile : IUploadFile
	{
		private static string UPLOAD_FOLDER_NAME = "uploads";
		private static readonly string[] ImageExtensions = { "jpg", "jpeg", "png", "gif", "bmp", "svg", "webp" };
		private static readonly string[] AudioExtensions = { "mp3", "wav", "ogg", "flac", "aac", "wma" };
		private static readonly string[] VideoExtensions = { "mp4", "avi", "mov", "wmv", "mkv", "flv" };
		private readonly IWebHostEnvironment _webHostEnvironment;

		public UploadFile(IWebHostEnvironment webHostEnvironment)
		{
			_webHostEnvironment = webHostEnvironment;
		}

		public List<FileInformation> GetFiles(string? path = null)
		{
			string uploadsFolderPath = string.IsNullOrEmpty(path) ? UPLOAD_FOLDER_NAME : $"{UPLOAD_FOLDER_NAME}/{path}";
			string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, uploadsFolderPath);

			List<FileInformation> filesInfo = new List<FileInformation>();

			if (Directory.Exists(uploadsFolder))
			{
				string[] fileList = Directory.GetFiles(uploadsFolder);

				foreach (string filePath in fileList)
				{
					FileInfo fileInfo = new FileInfo(filePath);
					string Name = Path.GetFileName(filePath);

					FileInformation fileInformation = new FileInformation()
					{
						Name = Name,
						Path = $"/{uploadsFolderPath}/{Name}",
						Size = fileInfo.Length,
						Extension = Path.GetExtension(filePath)?.ToLower().Substring(1)
					};

					if (ImageExtensions.Contains(fileInformation.Extension))
					{
						using var image = SKBitmap.Decode(filePath);
						fileInformation.ImageWidth = image.Width;
						fileInformation.ImageHeight = image.Height;
					}

					filesInfo.Add(fileInformation);
				}
			}

			return filesInfo;
		}

		public async Task<FileInformation> UploadSingle(IFormFile file, string? path = null)
		{
			string? extension = Path.GetExtension(file.FileName)?.ToLower().Substring(1);

			if (string.IsNullOrEmpty(extension) || !IsMediaExtension(extension))
			{
				throw new Exception("Tệp tin không hợp lệ. Vui lòng tải lên ảnh, âm thanh hoặc video.");
			}

			string uploadsFolderPath = string.IsNullOrEmpty(path) ? UPLOAD_FOLDER_NAME : $"{UPLOAD_FOLDER_NAME}/{path}";
			string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, uploadsFolderPath);

			if (!Directory.Exists(uploadsFolder))
			{
				Directory.CreateDirectory(uploadsFolder);
			}

			// Kiểm tra trùng lặp tên file và tạo tên file duy nhất
			string fileName = GetUniqueFileName(file.FileName, uploadsFolder);
			string filePath = Path.Combine(uploadsFolder, fileName);

			using (var stream = File.Create(filePath))
			{
				await file.CopyToAsync(stream);
			}

			// Nếu là ảnh, nén và thay đổi kích thước
			if (ImageExtensions.Contains(extension))
			{
				CompressImage(filePath);
			}

			FileInfo fileInfo = new FileInfo(filePath);
			FileInformation fileInformation = new FileInformation()
			{
				Name = fileName,
				Path = $"/{uploadsFolderPath}/{fileName}",
				Size = fileInfo.Length,
				Extension = extension
			};

			return fileInformation;
		}

		private string GetUniqueFileName(string fileName, string uploadFolder)
		{
			string extension = Path.GetExtension(fileName).ToLower();
			string nameWithoutExtension = Path.GetFileNameWithoutExtension(fileName);

			// Create random string instead of using count numbers
			string uniqueName = $"{nameWithoutExtension}_{Guid.NewGuid()}";
			string uniqueFileName = uniqueName + extension;

			// If the file has existed, we can add a guid array or create another random file name
			while (File.Exists(Path.Combine(uploadFolder, uniqueFileName)))
			{
				uniqueFileName = $"{nameWithoutExtension}_{Guid.NewGuid()}";
			}

			return uniqueFileName;
		}

		private void CompressImage(string filePath, int quality = 75)
		{
			using (var original = SKBitmap.Decode(filePath))
			{
				var imageInfo = new SKImageInfo(original.Width, original.Height);

				using (var image = SKImage.FromBitmap(original))
				{
					var encoded = image.Encode(SKEncodedImageFormat.Jpeg, quality);

					using (var stream = File.OpenWrite(filePath))
					{
						encoded.SaveTo(stream);
					}
				}
			}
		}

		public async Task<List<FileInformation>> UploadMultiple(List<IFormFile> files, string? path = null)
		{
			var uploadTasks = files.Select(file => UploadSingle(file, path)).ToList();
			FileInformation[] results = await Task.WhenAll(uploadTasks);
			return results.ToList();
		}

		public void DeleteFile(string path)
		{
			if (path.StartsWith("/uploads/"))
			{
				path = path.Remove(0, "/uploads/".Length);
			}

			string filePath = Path.Combine(_webHostEnvironment.WebRootPath, $"{UPLOAD_FOLDER_NAME}/{path}");

			if (File.Exists(filePath))
			{
				File.Delete(filePath);
			}
			else if (Directory.Exists(filePath))
			{
				Directory.Delete(filePath, true);
			}
		}

		private bool IsMediaExtension(string extension)
		{
			return ImageExtensions.Contains(extension) || AudioExtensions.Contains(extension) || VideoExtensions.Contains(extension);
		}
	}
}