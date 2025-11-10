import MainTable from "@/ui/table/MainTable";
import { useCallback, useEffect, useMemo } from "react";
import { workScheduleTableColumns } from "./constants";
import { useWorkSchedulesContext } from "../../contexts/WorkScheduleContext";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { WorkScheduleDto } from "@/generate-api";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";

const WorkScheduleTable = () => {
  const { workSchedulePaginated, updateRequest, loading } =
    useWorkSchedulesContext();

  useEffect(() => {
    updateRequest();
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<WorkScheduleDto> | SorterResult<WorkScheduleDto>[]
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
    () => getPaginationConfig(workSchedulePaginated),
    [workSchedulePaginated]
  );

  return (
    <MainTable
      columns={workScheduleTableColumns}
      dataSource={workSchedulePaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default WorkScheduleTable;
