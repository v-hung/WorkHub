import MainTable from "@/ui/table/MainTable";
// import { useRoles } from "../../hooks/useRoles";
import { useCallback, useEffect, useMemo } from "react";
import { roleTableColumns } from "./constants";
import { useRolesContext } from "../../contexts/RoleContext";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { RoleDto } from "@/generate-api";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";

const RoleTable = () => {
  const { rolePaginated, updateRequest, loading } = useRolesContext();

  useEffect(() => {
    updateRequest();
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<RoleDto> | SorterResult<RoleDto>[]
    ) => {
      const { current, pageSize, orderBy, conditions } = handleTableChange(
        pagination,
        filters,
        sorter
      );

      updateRequest((prev) => ({
        ...prev,
        pageNumber: current ?? prev.pageNumber,
        pageSize: pageSize ?? prev.pageSize,
        orderBy,
        where: {
          conditions: conditions,
        },
      }));
    },
    [updateRequest]
  );

  const paginationConfig = useMemo(
    () => getPaginationConfig(rolePaginated),
    [rolePaginated]
  );

  return (
    <MainTable
      columns={roleTableColumns}
      dataSource={rolePaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default RoleTable;
