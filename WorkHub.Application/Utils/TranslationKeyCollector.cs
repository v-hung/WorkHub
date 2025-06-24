using System.Collections;
using System.Reflection;
using WorkHub.Application.Attributes;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Domain.Entities.Misc;

namespace WorkHub.Application.Utils
{
	public class TranslationUtils
	{
		public static HashSet<string> CollectTranslationKeys(object? obj)
		{
			var keys = new HashSet<string>();
			CollectKeysRecursive(obj, keys, []);
			return keys;
		}

		private static void CollectKeysRecursive(object? obj, HashSet<string> keys, HashSet<object> visited)
		{
			if (obj == null || visited.Contains(obj))
				return;

			visited.Add(obj);

			var type = obj.GetType();

			if (!ImplementsIEntity(type))
				return;

			var idProp = type.GetProperty("Id");
			var idValue = idProp?.GetValue(obj)?.ToString();
			if (string.IsNullOrEmpty(idValue))
				return;

			var prefix = GetLocalizePrefix(type);

			foreach (var prop in type.GetProperties(BindingFlags.Public | BindingFlags.Instance))
			{
				var propValue = prop.GetValue(obj);

				if (prop.IsDefined(typeof(LocalizeAttribute), inherit: false))
				{
					var key = $"{prefix}.{prop.Name}.{idValue}";
					keys.Add(key);
				}

				if (propValue == null)
					continue;

				if (IsEntityDto(prop.PropertyType))
				{
					CollectKeysRecursive(propValue, keys, visited);
				}

				else if (propValue is IEnumerable enumerable && !(propValue is string))
				{
					foreach (var item in enumerable)
					{
						if (item != null && IsEntityDto(item.GetType()))
							CollectKeysRecursive(item, keys, visited);
					}
				}
			}
		}

		public static void ApplyTranslations(object? input, List<Translation> translations)
		{
			if (input == null) return;

			var translationMap = translations.ToDictionary(t => t.Key, t => t.Value);
			var visited = new HashSet<object>();

			if (input is IEnumerable enumerable && input is not string)
			{
				foreach (var item in enumerable)
				{
					if (item != null)
						ApplyToDto(item, translationMap, visited);
				}
			}
			else
			{
				ApplyToDto(input, translationMap, visited);
			}
		}

		private static void ApplyToDto(object obj, Dictionary<string, string> translationMap, HashSet<object> visited)
		{
			if (obj == null || visited.Contains(obj)) return;

			visited.Add(obj);

			var type = obj.GetType();
			if (!ImplementsIEntity(type)) return;

			var idProp = type.GetProperty("Id");
			var idValue = idProp?.GetValue(obj)?.ToString();
			if (string.IsNullOrEmpty(idValue)) return;

			var prefix = GetLocalizePrefix(type);

			foreach (var prop in type.GetProperties(BindingFlags.Public | BindingFlags.Instance))
			{
				var propValue = prop.GetValue(obj);

				if (prop.IsDefined(typeof(LocalizeAttribute), false))
				{
					var key = $"{prefix}.{prop.Name}.{idValue}";
					if (translationMap.TryGetValue(key, out var translatedValue))
					{
						prop.SetValue(obj, translatedValue);
					}
				}

				if (propValue == null) continue;

				if (IsEntityDto(prop.PropertyType))
				{
					ApplyToDto(propValue, translationMap, visited);
				}
				else if (propValue is IEnumerable childList && propValue is not string)
				{
					foreach (var child in childList)
					{
						if (child != null && IsEntityDto(child.GetType()))
						{
							ApplyToDto(child, translationMap, visited);
						}
					}
				}
			}
		}

		private static bool ImplementsIEntity(Type type)
		{
			return type.GetInterfaces().Any(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IEntity<>));
		}

		private static bool IsEntityDto(Type type)
		{
			return type.IsClass && type != typeof(string) && ImplementsIEntity(type);
		}

		private static string GetLocalizePrefix(Type type)
		{
			var attr = type.GetCustomAttribute<LocalizePrefixAttribute>();
			return attr?.Prefix ?? type.Name;
		}
	}
}