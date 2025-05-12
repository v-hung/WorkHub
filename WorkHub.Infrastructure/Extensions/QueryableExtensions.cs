using System.Linq.Expressions;
using System.Reflection;
using WorkHub.Application.Requests;

namespace WorkHub.Infrastructure.Extensions
{
	public static class QueryableExtensions
	{
		public static Expression<Func<T, bool>>? BuildPredicateFromSearchConditions<T>(List<SearchCondition>? conditions)
		{
			if (conditions == null || !conditions.Any()) return null;

			var parameter = Expression.Parameter(typeof(T), "x");
			Expression? combinedExpression = null;

			foreach (var condition in conditions)
			{
				if (string.IsNullOrWhiteSpace(condition.Column) || condition.Values == null || condition.Values.Count == 0) continue;

				var property = typeof(T).GetProperty(condition.Column, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
				if (property == null) continue;

				var propertyAccess = Expression.Property(parameter, property);
				Expression? predicate = property.PropertyType switch
				{
					Type t when t == typeof(string) => HandleStringCondition(propertyAccess, condition),
					Type t when t == typeof(int) || t == typeof(int?) => HandleIntCondition(propertyAccess, condition),
					Type t when t == typeof(DateTime) || t == typeof(DateTime?) => HandleDateTimeCondition(propertyAccess, condition),
					_ => null
				};

				if (predicate != null)
				{
					combinedExpression = combinedExpression == null
						? predicate
						: Expression.AndAlso(combinedExpression, predicate);
				}
			}

			if (combinedExpression == null) return null;

			return Expression.Lambda<Func<T, bool>>(combinedExpression, parameter);
		}

		private static Expression? HandleStringCondition(MemberExpression member, SearchCondition condition)
		{
			var value = condition.Values.FirstOrDefault() ?? "";
			var constant = Expression.Constant(value);

			return condition.Operator switch
			{
				SearchOperator.Eq => Expression.Equal(member, constant),
				SearchOperator.Contains => Expression.Call(member, typeof(string).GetMethod("Contains", [typeof(string)])!, constant),
				SearchOperator.Neq => Expression.NotEqual(member, constant),
				_ => null
			};
		}

		private static Expression? HandleIntCondition(MemberExpression member, SearchCondition condition)
		{
			if (!int.TryParse(condition.Values.FirstOrDefault(), out var intVal)) return null;
			var constant = Expression.Constant(intVal, typeof(int));

			return condition.Operator switch
			{
				SearchOperator.Eq => Expression.Equal(member, constant),
				SearchOperator.Neq => Expression.NotEqual(member, constant),
				SearchOperator.Gt => Expression.GreaterThan(member, constant),
				SearchOperator.Gte => Expression.GreaterThanOrEqual(member, constant),
				SearchOperator.Lt => Expression.LessThan(member, constant),
				SearchOperator.Lte => Expression.LessThanOrEqual(member, constant),
				SearchOperator.In => BuildInExpression<int>(member, condition.Values),
				_ => null
			};
		}

		private static Expression? HandleDateTimeCondition(MemberExpression member, SearchCondition condition)
		{
			var values = condition.Values;
			if (condition.Operator == SearchOperator.Between && values.Count >= 2 &&
					DateTime.TryParse(values[0], out var from) && DateTime.TryParse(values[1], out var to))
			{
				return Expression.AndAlso(
						Expression.GreaterThanOrEqual(member, Expression.Constant(from)),
						Expression.LessThanOrEqual(member, Expression.Constant(to))
				);
			}

			if (!DateTime.TryParse(values.FirstOrDefault(), out var dt)) return null;
			var constant = Expression.Constant(dt, typeof(DateTime));

			return condition.Operator switch
			{
				SearchOperator.Eq => Expression.Equal(member, constant),
				SearchOperator.Gt => Expression.GreaterThan(member, constant),
				SearchOperator.Gte => Expression.GreaterThanOrEqual(member, constant),
				SearchOperator.Lt => Expression.LessThan(member, constant),
				SearchOperator.Lte => Expression.LessThanOrEqual(member, constant),
				_ => null
			};
		}

		private static Expression? BuildInExpression<T>(MemberExpression member, List<string> values)
		{
			var parsedConstants = values
					.Select(v => TryParse<T>(v))
					.Where(v => v != null)
					.Select(v => Expression.Constant(v!, typeof(T)))
					.ToList();

			if (!parsedConstants.Any()) return null;

			Expression? result = null;
			foreach (var constant in parsedConstants)
			{
				var equal = Expression.Equal(member, constant);
				result = result == null ? equal : Expression.OrElse(result, equal);
			}

			return result;
		}

		private static T? TryParse<T>(string input)
		{
			try
			{
				return (T?)Convert.ChangeType(input, typeof(T));
			}
			catch
			{
				return default;
			}
		}


	}

}