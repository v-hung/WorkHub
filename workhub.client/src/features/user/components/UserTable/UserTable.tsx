import MainTable from "@/ui/table/MainTable";
import { userTableColumns, userTableSearchOperatorMap } from "./constants";
import { useCallback, useEffect, useMemo } from "react";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";
import { UserDto } from "@/generate-api";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { TablePaginationConfig } from "antd/lib";
import { useUserContext } from "../../contexts/UserContext";

const UserTable = () => {
  const { userPaginated, updateRequest, loading } = useUserContext();

  useEffect(() => {
    updateRequest((r) => ({ ...r, pageNumber: 1, searchConditions: [] }));
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<UserDto> | SorterResult<UserDto>[]
    ) => {
      handleTableChange(
        pagination,
        filters,
        sorter,
        updateRequest,
        userTableSearchOperatorMap
      );
    },
    [updateRequest]
  );

  const paginationConfig = useMemo(
    () => getPaginationConfig(userPaginated),
    [userPaginated]
  );

  return (
    <MainTable
      columns={userTableColumns}
      dataSource={userPaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UserTable;
