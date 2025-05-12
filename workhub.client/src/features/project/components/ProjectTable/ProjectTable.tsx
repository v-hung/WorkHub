import MainTable from "@/ui/table/MainTable";
// import { useProjects } from "../../hooks/useProjects";
import { useCallback, useEffect, useMemo } from "react";
import { projectTableColumns } from "./constants";
import { useProjectsContext } from "../../contexts/ProjectContext";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { ProjectDto } from "@/generate-api";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";

const ProjectTable = () => {
  const { projectPaginated, updateRequest, loading } = useProjectsContext();

  useEffect(() => {
    updateRequest((r) => ({ ...r, pageNumber: 1, searchConditions: [] }));
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<ProjectDto> | SorterResult<ProjectDto>[]
    ) => {
      handleTableChange(pagination, filters, sorter, updateRequest);
    },
    [updateRequest]
  );

  const paginationConfig = useMemo(
    () => getPaginationConfig(projectPaginated),
    [projectPaginated]
  );

  return (
    <MainTable
      columns={projectTableColumns}
      dataSource={projectPaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default ProjectTable;
