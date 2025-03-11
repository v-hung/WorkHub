using System.Linq.Dynamic.Core;
using System.Linq.Expressions;
using System.Net;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using WorkTimeTracker.Application.Interfaces.Repositories;
using WorkTimeTracker.Application.Requests;
using WorkTimeTracker.Application.Wrapper;
using WorkTimeTracker.Domain.Entities.Audit;
using WorkTimeTracker.Infrastructure.Data;
using WorkTimeTracker.Application.Exceptions;

namespace WorkTimeTracker.Infrastructure.Repositories
{
	public class Repository<T, TId> : IRepository<T, TId> where T : class, IEntity<TId>
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;
		private readonly IStringLocalizer<Repository<T, TId>> _localizer;

		public Repository(ApplicationDbContext context, IMapper mapper, IStringLocalizer<Repository<T, TId>> localizer)
		{
			_context = context;
			_mapper = mapper;
			_localizer = localizer;
		}

		public async Task<IList<D>> GetAllAsync<D>(Expression<Func<T, bool>>? filter = null) where D : class
		{

			IQueryable<T> query = _context.Set<T>().AsQueryable();

			// Apply Filtering
			if (filter != null)
			{
				query = query.Where(filter);
			}

			return await query.ProjectTo<D>(_mapper.ConfigurationProvider).ToListAsync();
		}

		public async Task<Paginated<D>> SearchAsync<D>(PagedRequest request, Expression<Func<T, bool>>? filter = null) where D : class
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

			return new Paginated<D>(pagedData, totalRecords, request.PageNumber, request.PageSize);
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

		public async Task<D> CreateOrUpdateAsync<D, DId>(TId id, object request, List<Func<T, Task>>? updateRelations = null) where D : class, IEntity<DId>
		{
			T entity = (id != null && !id.Equals(default(TId)))
				? await _context.Set<T>().FindAsync(id) ?? throw new BusinessException(HttpStatusCode.NotFound, _localizer["EntityNotFound", typeof(T).Name])
				: Activator.CreateInstance<T>() ?? throw new BusinessException(HttpStatusCode.BadRequest, $"Cannot create an instance of {typeof(T).Name}");

			_mapper.Map(request, entity);

			if (updateRelations != null)
			{
				foreach (var updateRelation in updateRelations)
				{
					await updateRelation(entity);
				}
			}

			if (id == null || id.Equals(default(TId)))
			{
				await _context.Set<T>().AddAsync(entity);
			}

			await _context.SaveChangesAsync();

			return _mapper.Map<D>(entity);
		}

		public async Task UpdateRelatedEntitiesAsync<D, DId>(T entity, Expression<Func<T, ICollection<D>>> navigationProperty, IList<DId>? relatedEntityIds, TId id) where D : class, IEntity<DId>
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