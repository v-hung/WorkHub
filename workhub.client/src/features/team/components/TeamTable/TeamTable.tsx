import MainTable from "@/ui/table/MainTable";
// import { useTeams } from "../../hooks/useTeams";
import { useCallback, useEffect, useMemo } from "react";
import { teamTableColumns } from "./constants";
import { useTeamContext } from "../../contexts/TeamContext";
import { TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { TeamDto } from "@/generate-api";
import { getPaginationConfig, handleTableChange } from "@/utils/table.utils";

const TeamTable = () => {
  const { teamPaginated, updateRequest, loading } = useTeamContext();

  useEffect(() => {
    updateRequest((r) => ({ ...r, pageNumber: 1, searchConditions: [] }));
  }, []);

  const onTableChange = useCallback(
    async (
      pagination: TablePaginationConfig,
      filters: Record<string, FilterValue | null>,
      sorter: SorterResult<TeamDto> | SorterResult<TeamDto>[]
    ) => {
      handleTableChange(pagination, filters, sorter, updateRequest);
    },
    [updateRequest]
  );

  const paginationConfig = useMemo(
    () => getPaginationConfig(teamPaginated),
    [teamPaginated]
  );

  return (
    <MainTable
      columns={teamTableColumns}
      dataSource={teamPaginated.data}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default TeamTable;
