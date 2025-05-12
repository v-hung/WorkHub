import MainTable from "@/ui/table/MainTable";
import { useCallback, useEffect, useMemo } from "react";
import { workTimeTableColumns } from "./constants";
import { useWorkTimesContext } from "../../contexts/WorkTimeContext";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { WorkTimeDto } from "@/generate-api";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";

const WorkTimeTable = () => {
  const { workTimePaginated, updateRequest, loading } = useWorkTimesContext();

  useEffect(() => {
    updateRequest((r) => ({ ...r, pageNumber: 1, searchConditions: [] }));
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<WorkTimeDto> | SorterResult<WorkTimeDto>[]
    ) => {
      handleTableChange(pagination, filters, sorter, updateRequest);
    },
    [updateRequest]
  );

  const paginationConfig = useMemo(
    () => getPaginationConfig(workTimePaginated),
    [workTimePaginated]
  );

  return (
    <MainTable
      columns={workTimeTableColumns}
      dataSource={workTimePaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default WorkTimeTable;
