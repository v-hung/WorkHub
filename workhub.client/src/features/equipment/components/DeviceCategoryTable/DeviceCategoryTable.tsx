import MainTable from "@/ui/table/MainTable";
// import { useDeviceCategories } from "../../hooks/useDeviceCategories";
import { useCallback, useEffect, useMemo } from "react";
import { deviceCategoryTableColumns } from "./constants";
import { useDeviceCategoriesContext } from "../../../equipment/contexts/DeviceCategoryContext";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { DeviceCategoryDto } from "@/generate-api";

const DeviceCategoryTable = () => {
  const { deviceCategoryPaginated, updateRequest, loading } =
    useDeviceCategoriesContext();

  useEffect(() => {
    updateRequest();
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter:
        | SorterResult<DeviceCategoryDto>
        | SorterResult<DeviceCategoryDto>[]
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
    () => getPaginationConfig(deviceCategoryPaginated),
    [deviceCategoryPaginated]
  );

  return (
    <MainTable
      columns={deviceCategoryTableColumns}
      dataSource={deviceCategoryPaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default DeviceCategoryTable;
