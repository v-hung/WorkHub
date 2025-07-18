using System.Linq.Expressions;
using System.Reflection;
using WorkHub.Application.Requests;

namespace WorkHub.Infrastructure.Extensions
{
	public static class QueryableExtensions
	{
		public static Expression<Func<T, bool>>? BuildPredicateFromSearchConditionGroup<T>(SearchConditionGroup? group)
		{
			if (group == null) return null;

			var parameter = Expression.Parameter(typeof(T), "x");
			var expression = BuildGroupExpression<T>(group, parameter);

			if (expression == null) return null;

			return Expression.Lambda<Func<T, bool>>(expression, parameter);
		}

		private static Expression? BuildGroupExpression<T>(SearchConditionGroup group, ParameterExpression parameter)
		{
			List<Expression> expressions = [];

			if (group.Conditions != null)
			{
				foreach (var condition in group.Conditions)
				{
					if (string.IsNullOrWhiteSpace(condition.Column) || condition.Values == null || !condition.Values.Any())
						continue;

					var property = typeof(T).GetProperty(condition.Column, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
					if (property == null) continue;

					var member = Expression.Property(parameter, property);

					Expression? predicate = property.PropertyType switch
					{
						Type t when t == typeof(string) => HandleStringCondition(member, condition),
						Type t when t == typeof(int) || t == typeof(int?) => HandleIntCondition(member, condition),
						Type t when t == typeof(DateTime) || t == typeof(DateTime?) => HandleDateTimeCondition(member, condition),
						Type t when t.IsEnum || IsNullableEnum(t) => HandleEnumCondition(member, condition),
						_ => null
					};

					if (predicate != null) expressions.Add(predicate);
				}
			}

			if (group.Groups != null)
			{
				foreach (var subgroup in group.Groups)
				{
					var subExpr = BuildGroupExpression<T>(subgroup, parameter);
					if (subExpr != null) expressions.Add(subExpr);
				}
			}

			if (!expressions.Any()) return null;

			return group.Operator == LogicalOperator.And
				? expressions.Aggregate(Expression.AndAlso)
				: expressions.Aggregate(Expression.OrElse);
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

		private static Expression HandleEnumCondition(Expression property, SearchCondition condition)
		{
			var enumType = Nullable.GetUnderlyingType(property.Type) ?? property.Type;

			var values = condition.Values
					.Select(v => Enum.TryParse(enumType, v, true, out var parsed) ? parsed : null)
					.Where(v => v != null)
					.ToList();

			var constant = Expression.Constant(values);
			var containsMethod = typeof(List<object>).GetMethod("Contains", new[] { typeof(object) });

			var converted = Expression.Convert(property, typeof(object));
			return Expression.Call(constant, containsMethod!, converted);
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

		static bool IsNullableEnum(Type type) => Nullable.GetUnderlyingType(type)?.IsEnum == true;
	}

}