using System.Linq.Dynamic.Core;
using System.Linq.Expressions;
using System.Net;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkHub.Application.Interfaces.Repositories;
using WorkHub.Application.Requests;
using WorkHub.Application.Wrapper;
using WorkHub.Domain.Entities.Audit;
using WorkHub.Infrastructure.Data;
using WorkHub.Application.Exceptions;
using System.Reflection;

namespace WorkHub.Infrastructure.Repositories
{
	public class Repository<T, TId> : IRepository<T, TId> where T : class, IEntity<TId>
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer _localizer;

		public Repository(ApplicationDbContext context, IMapper mapper, IStringLocalizerFactory localizerFactory)
		{
			_context = context;
			_mapper = mapper;
			_localizer = localizerFactory.Create("Repositories.Repository", Assembly.GetExecutingAssembly().GetName().Name ?? "");
		}

		public async Task<List<D>> GetAllAsync<D>(Expression<Func<T, bool>>? filter = null) where D : class
		{

			IQueryable<T> query = _context.Set<T>().AsQueryable();

			// Apply Filtering
			if (filter != null)
			{
				query = query.Where(filter);
			}

			return await query.ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();
		}

		public async Task<int> CountAsync(Expression<Func<T, bool>>? filter = null)
		{

			IQueryable<T> query = _context.Set<T>().AsQueryable();

			// Apply Filtering
			if (filter != null)
			{
				query = query.Where(filter);
			}

			return await query.CountAsync();
		}

		public async Task<Paginated<D>> SearchAsync<D, DId>(PagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class, IEntity<DId>
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
				projectedQuery = projectedQuery.OrderBy(request.OrderByString);
			}
			else
			{
				projectedQuery = projectedQuery.OrderBy(v => v.Id);
			}

			var totalRecords = await projectedQuery.CountAsync();

			// Apply Pagination
			var pagedData = await projectedQuery
				.Skip((request.PageNumber - 1) * request.PageSize)
				.Take(request.PageSize)
				.ToListAsync();

			return new Paginated<D>(pagedData, totalRecords, request.PageNumber, request.PageSize);
		}

		public async Task<CursorPaginated<D>> CursorSearchAsync<D>(CursorPagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class, IEntity<int>
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

			if (request.CursorId != null && request.CursorId > 0)
			{

				if (request.CursorPagedRequestDirection == CursorPagedRequestDirection.Next)
				{
					projectedQuery = request.NewestFirst
						? projectedQuery.Where(v => v.Id < request.CursorId).OrderByDescending(v => v.Id)
						: projectedQuery.Where(v => v.Id > request.CursorId).OrderBy(v => v.Id);
				}
				else if (request.CursorPagedRequestDirection == CursorPagedRequestDirection.Previous)
				{
					projectedQuery = request.NewestFirst
						? projectedQuery.Where(v => v.Id > request.CursorId).OrderBy(v => v.Id)
						: projectedQuery.Where(v => v.Id < request.CursorId).OrderByDescending(v => v.Id);
				}
			}

			// Apply Pagination
			var data = await projectedQuery
				.Take(request.Limit + 1)
				.ToListAsync();

			bool hasMore = data.Count > request.Limit;

			if (hasMore)
			{
				data.RemoveAt(data.Count - 1);
			}

			if ((request.CursorPagedRequestDirection == CursorPagedRequestDirection.Previous && request.NewestFirst) ||
				(request.CursorPagedRequestDirection == CursorPagedRequestDirection.Next && !request.NewestFirst))
			{
				data.Reverse();
			}

			var totalRecords = await projectedQuery.CountAsync();

			return new CursorPaginated<D>(data, data.Any() ? data.Last().Id : null, request.Limit, totalRecords, hasMore);
		}

		public async Task<D> GetAsync<D>(Expression<Func<T, bool>> filter, bool asNoTracking = true) where D : class
		{
			var query = asNoTracking
				? _context.Set<T>().AsNoTracking()
				: _context.Set<T>();

			return await query.Where(filter)
				.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync() ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound", typeof(T).Name]);
		}

		public async Task<D> GetByIdAsync<D, DId>(TId id, bool asNoTracking = true) where D : IEntity<DId> where DId : notnull
		{
			var query = asNoTracking
				? _context.Set<T>().AsNoTracking()
				: _context.Set<T>();

			return await query.ProjectTo<D>(_mapper.ConfigurationProvider)
				.FirstOrDefaultAsync(p => p.Id.Equals(id)) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound", typeof(T).Name]);
		}

		public async Task<D> CreateAsync<D>(object request, List<Func<T, Task>>? updateRelations = null) where D : class
		{
			T entity = Activator.CreateInstance<T>() ?? throw new BusinessException(HttpStatusCode.BadRequest, $"Cannot create an instance of {typeof(T).Name}");

			_mapper.Map(request, entity);

			if (updateRelations != null)
			{
				foreach (var updateRelation in updateRelations)
				{
					await updateRelation(entity);
				}
			}

			await _context.Set<T>().AddAsync(entity);
			await _context.SaveChangesAsync();

			return _mapper.Map<D>(entity);
		}

		public async Task<D> UpdateAsync<D, DId>(TId id, object request, List<Func<T, Task>>? updateRelations = null) where D : class, IEntity<DId>
		{
			T entity = await _context.Set<T>().FindAsync(id) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound", typeof(T).Name]);

			_mapper.Map(request, entity);

			if (updateRelations != null)
			{
				foreach (var updateRelation in updateRelations)
				{
					await updateRelation(entity);
				}
			}

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(entity);
		}

		public async Task UpdateRelatedEntitiesAsync<D, DId>(
		T entity,
		Expression<Func<T, ICollection<D>>> navigationProperty,
		IList<DId>? relatedEntityIds,
		TId? id) where D : class, IEntity<DId>
		{
			if (relatedEntityIds != null && relatedEntityIds.Any())
			{
				var collection = navigationProperty.Compile()(entity);

				if (id != null && !id.Equals(default(TId)))
				{
					await _context.Entry(entity).Collection(GetPropertyName(navigationProperty)).LoadAsync();
					collection.Clear();
				}

				List<D> relatedEntities = await _context.Set<D>()
						.Where(v => relatedEntityIds.Contains(v.Id))
						.ToListAsync();

				foreach (var relatedEntity in relatedEntities)
				{
					collection.Add(relatedEntity);
				}
			}
		}

		public async Task DeleteAsync(TId id)
		{
			var entity = await _context.Set<T>().FindAsync(id) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound", typeof(T).Name]);

			_context.Set<T>().Remove(entity);

			await _context.SaveChangesAsync();
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