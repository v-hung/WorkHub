import { Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnType } from "antd/es/table";
import type {
  FilterDropdownProps,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { TablePaginationConfig } from "antd/lib";
import {
  SearchCondition,
  SearchOperator,
  UserSearchRequest,
} from "@/generate-api";

export const getColumnSearchProps = <T extends object>(
  dataIndex: keyof T
): ColumnType<T> => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }: FilterDropdownProps) => (
    <div style={{ padding: 8 }}>
      <Input
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
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  filteredValue: undefined,
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

export const handleTableChange = <D extends UserSearchRequest>(
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter: SorterResult<any> | SorterResult<any>[],
  setRequest: React.Dispatch<React.SetStateAction<D>>
) => {
  const { current, pageSize } = pagination;

  // Convert sorter to orderBy
  const orderBy = (Array.isArray(sorter) ? sorter : [sorter])
    .filter((s) => s.order)
    .map(
      (s) => `${s.field} ${s.order === "ascend" ? "ascending" : "descending"}`
    );

  // Convert filters to searchConditions
  const searchConditions: SearchCondition[] = Object.entries(filters)
    .filter(([_, value]) => Array.isArray(value) && value.length > 0)
    .map(([column, value]) => ({
      column: column,
      operator: SearchOperator.In,
      values: value as string[],
    }));

  // Update request
  setRequest((prev) => ({
    ...prev,
    pageNumber: current ?? prev.pageNumber,
    pageSize: pageSize ?? prev.pageSize,
    orderBy,
    searchConditions,
  }));
};
