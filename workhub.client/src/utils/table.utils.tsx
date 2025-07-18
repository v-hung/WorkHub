import { Input, Button, Space, InputRef } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnType } from "antd/es/table";
import type {
  FilterDropdownProps,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { TablePaginationConfig } from "antd/lib";
import { PagedRequest, SearchCondition, SearchOperator } from "@/generate-api";
import { useEffect, useRef } from "react";

export const getColumnSearchProps = <T extends object>(
  dataIndex: keyof T
): ColumnType<T> => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    visible,
  }: FilterDropdownProps) => {
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
      if (visible) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    }, [visible]);

    return (
      <div style={{ padding: 8 }}>
        <Input
          ref={inputRef}
          placeholder={`Search ${String(dataIndex)}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters?.();
              confirm();
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    );
  },
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  // filteredValue: undefined,
});

export interface PaginatedResult<T> {
  data: T[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}

export const getPaginationConfig = <T,>(
  paginated: PaginatedResult<T>,
  extra?: Partial<TablePaginationConfig>
): TablePaginationConfig => ({
  pageSize: paginated.pageSize,
  current: paginated.currentPage,
  total: paginated.totalCount,
  showSizeChanger: true,
  pageSizeOptions: ["25", "50", "100"],
  ...extra,
});

export const handleTableChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<any> | SorterResult<any>[],
  searchOperatorMap?: Record<string, SearchOperator>
) => {
  const { current, pageSize } = pagination;

  // Convert sorter to orderBy
  const orderBy = (Array.isArray(sorter) ? sorter : [sorter])
    .filter((s) => s.order)
    .map(
      (s) => `${s.field} ${s.order === "ascend" ? "ascending" : "descending"}`
    )
    .join(",");

  // Convert filters to searchConditions
  const conditions: SearchCondition[] = Object.entries(filters)
    .filter(([_, value]) => Array.isArray(value) && value.length > 0)
    .map(([column, value]) => ({
      column: column,
      operator: searchOperatorMap?.[column] ?? SearchOperator.Contains,
      values: value as string[],
    }));

  return { current, pageSize, orderBy, conditions };
};

export const getDefaultFilteredValue = (
  searchCondition: SearchCondition[],
  column: string
): FilterValue | null => {
  const condition = searchCondition.find((c) => c.column === column);
  if (condition && condition.values && condition.values.length > 0) {
    return condition.values;
  }

  return null;
};
