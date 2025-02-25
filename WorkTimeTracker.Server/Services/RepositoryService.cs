using System.Linq.Expressions;
using AutoMapper;
using WorkTimeTracker.Server.Data;
using WorkTimeTracker.Server.Requests;
using WorkTimeTracker.Server.Wrapper;
using System.Linq.Dynamic.Core;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using WorkTimeTracker.Server.Interfaces.Services;
using WorkTimeTracker.Server.Models.Audit;
using WorkTimeTracker.Server.Middlewares.Exceptions;
using System.Net;

namespace WorkTimeTracker.Server.Services
{
	public class RepositoryService<T, TId> : IRepositoryService<T, TId> where T : class, IEntity<TId> where TId : notnull
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;

		public RepositoryService(ApplicationDbContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		public async Task<Paginated<D>> SearchAsync<D>(PagedRequest request, Expression<Func<T, bool>>? filter = null)
		where D : class
		{
			IQueryable<T> query = _context.Set<T>().AsQueryable();

			// Apply Filtering
			if (filter != null)
			{
				query = query.Where(filter);
			}

			var projectedQuery = query.ProjectTo<D>(_mapper.ConfigurationProvider);

			// Search
			if (!string.IsNullOrWhiteSpace(request.SearchString))
			{
				var parameter = Expression.Parameter(typeof(D), "x");
				var searchExpression = (Expression?)null;

				foreach (var property in typeof(D).GetProperties().Where(p => p.PropertyType == typeof(string)))
				{
					var propertyAccess = Expression.Property(parameter, property);
					var containsMethod = typeof(string).GetMethod("Contains", [typeof(string)]);

					if (containsMethod != null)
					{
						var searchTerm = Expression.Constant(request.SearchString, typeof(string));
						var containsCall = Expression.Call(propertyAccess, containsMethod, searchTerm);
						searchExpression = searchExpression == null ? containsCall : Expression.OrElse(searchExpression, containsCall);
					}
				}

				if (searchExpression != null)
				{
					var lambda = Expression.Lambda<Func<D, bool>>(searchExpression, parameter);
					projectedQuery = projectedQuery.Where(lambda);
				}
			}

			// Apply Sorting
			if (request.OrderBy?.Any() == true)
			{
				var ordering = string.Join(",", request.OrderBy);
				projectedQuery = projectedQuery.OrderBy(ordering);
			}

			var totalRecords = await projectedQuery.CountAsync();

			// Apply Pagination
			var pagedData = await projectedQuery
				.Skip((request.PageNumber - 1) * request.PageSize)
				.Take(request.PageSize)
				.ToListAsync();

			return new Paginated<D>(pagedData, request.PageNumber, request.PageSize, totalRecords);
		}

		public async Task<D> GetAsync<D, DId>(TId id) where D : IEntity<DId> where DId : notnull
		{
			return await _context.Set<T>().AsNoTracking()
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync(p => p.Id.Equals(id)) ?? throw new BusinessException(HttpStatusCode.NoContent, typeof(T).Name + " is not found");
		}

		public async Task UpdateRelatedEntitiesAsync<D, DId>(T entity, Expression<Func<T, ICollection<D>>> navigationProperty, List<DId>? relatedEntityIds, TId? id) where D : class, IEntity<DId> where DId : notnull
		{
			if (relatedEntityIds != null && relatedEntityIds.Any())
			{
				var collection = navigationProperty.Compile()(entity);

				if (id != null)
				{
					await _context.Entry(entity).Collection(GetPropertyName(navigationProperty)).LoadAsync();

					collection.Clear();
				}

				foreach (var relatedId in relatedEntityIds)
				{
					var relatedEntity = Activator.CreateInstance<D>();
					typeof(T).GetProperty("Id")?.SetValue(relatedEntity, relatedId);

					_context.Set<D>().Attach(relatedEntity);

					collection.Add(relatedEntity);
				}
			}
		}

		private string GetPropertyName<TSource, TProperty>(Expression<Func<TSource, TProperty>> propertyLambda)
		{
			if (propertyLambda.Body is MemberExpression memberExpression)
			{
				return memberExpression.Member.Name;
			}

			throw new ArgumentException("The expression does not point to a member attribute.", nameof(propertyLambda));
		}
	}
}