import MainTable from "@/ui/table/MainTable";
import { useEffect, useMemo } from "react";
import { workTimeTableColumns } from "./constants";
import { useWorkTimesContext } from "../../contexts/WorkTimeContext";

const WorkTimeTable = () => {
  const { workTimePaginated, setRequest, loading } = useWorkTimesContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(() => workTimePaginated.data, [workTimePaginated.data]);

  return (
    <MainTable
      columns={workTimeTableColumns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default WorkTimeTable;
