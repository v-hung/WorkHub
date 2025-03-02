using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Swashbuckle.AspNetCore.Annotations;

namespace WorkTimeTracker.Application.Requests
{
    public class PagedRequest
    {
        private int _pageNumber = 1;
        private int _pageSize = 10;

        [Range(1, int.MaxValue, ErrorMessage = "Page number must be greater than 0")]
        [DefaultValue(1)]
        [Required]
        public int PageNumber
        {
            get => _pageNumber;
            set => _pageNumber = value < 1 ? 1 : value;
        }

        [Range(1, 100, ErrorMessage = "Page size must be between 1 and 100")]
        [DefaultValue(10)]
        [Required]
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = value < 1 ? 10 : (value > 100 ? 100 : value);
        }
        public string? SearchString { get; set; }

        [SwaggerSchema("of the form fieldname [ascending|descending],fieldname [ascending|descending]...")]
        public string[]? OrderBy { get; set; }

        public PagedRequest()
        {
        }
        public PagedRequest(int pageNumber, int pageSize, string searchString, string[] orderBy)
        {
            PageNumber = pageNumber;
            PageSize = pageSize;
            SearchString = searchString;
            OrderBy = orderBy?.Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        }

        public PagedRequest(int pageNumber, int pageSize, string searchString, string orderBy)
        {
            PageNumber = pageNumber;
            PageSize = pageSize;
            SearchString = searchString;
            if (!string.IsNullOrWhiteSpace(orderBy))
            {
                OrderBy = orderBy.Split(',')
                        .Where(x => !string.IsNullOrWhiteSpace(x))
                        .Select(x => x.Trim())
                        .ToArray();
            }
        }

        [SwaggerIgnore]
        public string OrderByString => OrderBy != null && OrderBy.Any()
                ? string.Join(",", OrderBy)
                : string.Empty;
    }
}