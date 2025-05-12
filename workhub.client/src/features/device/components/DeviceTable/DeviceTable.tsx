import MainTable from "@/ui/table/MainTable";
import { useCallback, useEffect, useMemo } from "react";
import { deviceTableColumns } from "./constants";
import { useDevicesContext } from "../../contexts/DeviceContext";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";
import { DeviceDto } from "@/generate-api";

const DeviceTable = () => {
  const { devicePaginated, updateRequest, loading } = useDevicesContext();

  useEffect(() => {
    updateRequest((r) => ({ ...r, pageNumber: 1, searchConditions: [] }));
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<DeviceDto> | SorterResult<DeviceDto>[]
    ) => {
      handleTableChange(pagination, filters, sorter, updateRequest);
    },
    [updateRequest]
  );

  const paginationConfig = useMemo(
    () => getPaginationConfig(devicePaginated),
    [devicePaginated]
  );

  return (
    <MainTable
      columns={deviceTableColumns}
      dataSource={devicePaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default DeviceTable;
