using Microsoft.AspNetCore.Hosting;
using WorkHub.Application.Models.Files;
using WorkHub.Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using SkiaSharp;
using System.Text.RegularExpressions;

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

		public async Task<FileInformation> UploadSingleAsync(IFormFile file, string? path = null)
		{
			string? extension = Path.GetExtension(file.FileName)?.ToLower().Substring(1);

			if (string.IsNullOrEmpty(extension) || !IsMediaExtension(extension))
			{
				throw new Exception("The file is invalid. Please upload photos, audio or video.");
			}

			string uploadsFolderPath = string.IsNullOrEmpty(path) ? UPLOAD_FOLDER_NAME : $"{UPLOAD_FOLDER_NAME}/{path}";
			string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, uploadsFolderPath);

			if (!Directory.Exists(uploadsFolder))
			{
				Directory.CreateDirectory(uploadsFolder);
			}

			string fileName = GetUniqueFileName(file.FileName, uploadsFolder);
			string filePath = Path.Combine(uploadsFolder, fileName);

			using (var stream = File.Create(filePath))
			{
				await file.CopyToAsync(stream);
			}

			// If it is a photo, compress and change the size
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

		public async Task<FileInformation> UploadSingleAsync(byte[] bytes, string? path = null)
		{

			string uploadsFolderPath = string.IsNullOrEmpty(path) ? UPLOAD_FOLDER_NAME : $"{UPLOAD_FOLDER_NAME}/{path}";
			string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, uploadsFolderPath);

			if (!Directory.Exists(uploadsFolder))
			{
				Directory.CreateDirectory(uploadsFolder);
			}

			string fileName = GetUniqueFileName("avatar.png", uploadsFolder);
			string filePath = Path.Combine(uploadsFolder, fileName);

			await File.WriteAllBytesAsync(filePath, bytes);

			FileInfo fileInfo = new FileInfo(filePath);
			FileInformation fileInformation = new FileInformation()
			{
				Name = fileName,
				Path = $"/{uploadsFolderPath}/{fileName}",
				Size = fileInfo.Length,
				Extension = "png"
			};

			return fileInformation;

		}

		public async Task<List<FileInformation>> UploadMultipleAsync(List<IFormFile> files, string? path = null)
		{
			var uploadTasks = files.Select(file => UploadSingle(file, path)).ToList();
			FileInformation[] results = await Task.WhenAll(uploadTasks);
			return results.ToList();
		}

		public async Task<List<FileInformation>> UploadMultipleAsync(List<byte[]> files, string? path = null)
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

		private string GetUniqueFileName(string fileName, string uploadFolder)
		{
			string extension = Path.GetExtension(fileName).ToLower();
			string nameWithoutExtension = Path.GetFileNameWithoutExtension(fileName);

			string asciiOnly = Regex.Replace(nameWithoutExtension, @"[^\u0000-\u007F]", "");

			string noSpacesOrSpecialChars = Regex.Replace(asciiOnly, @"[\s\W]", "_");

			string timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");

			Random rand = new();
			string randomNumber = rand.Next(1000).ToString("D3");

			string safeFileName = $"{noSpacesOrSpecialChars}_{timestamp}_{randomNumber}{extension}";

			return safeFileName;
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
	}
}