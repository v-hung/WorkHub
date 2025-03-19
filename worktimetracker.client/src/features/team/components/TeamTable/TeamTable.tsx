import MainTable from "@/ui/table/MainTable";
// import { useTeams } from "../../hooks/useTeams";
import { useEffect, useMemo } from "react";
import { teamTableColumns } from "./constants";
import { toDataTeamTable } from "@/mappings/team.mapping";
import { useTeamsContext } from "../../contexts/TeamContext";

const TeamTable = () => {
  const { teamPaginated, setRequest, loading } = useTeamsContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(
    () => teamPaginated.data.map(toDataTeamTable),
    [teamPaginated.data]
  );

  return (
    <MainTable columns={teamTableColumns} dataSource={data} loading={loading} />
  );
};

export default TeamTable;
