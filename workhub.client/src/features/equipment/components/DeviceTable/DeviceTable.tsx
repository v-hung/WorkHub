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
    updateRequest();
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<DeviceDto> | SorterResult<DeviceDto>[]
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
