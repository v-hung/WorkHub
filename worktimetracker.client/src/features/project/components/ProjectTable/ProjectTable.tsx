import MainTable from "@/ui/table/MainTable";
// import { useProjects } from "../../hooks/useProjects";
import { useEffect, useMemo } from "react";
import { projectTableColumns } from "./constants";
import { useProjectsContext } from "../../contexts/ProjectContext";

const ProjectTable = () => {
  const { projectPaginated, setRequest, loading } = useProjectsContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(() => projectPaginated.data, [projectPaginated.data]);

  return (
    <MainTable
      columns={projectTableColumns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default ProjectTable;
