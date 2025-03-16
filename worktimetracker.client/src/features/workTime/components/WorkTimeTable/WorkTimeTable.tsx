import MainTable from "@/ui/table/MainTable";
import { useWorkTimes } from "../../hooks/useWorkTimes";
import { useEffect, useMemo } from "react";
import { workTimeTableColumns } from "./constants";
import { toDataWorkTimeTable } from "@/mappings/workTime.mapping";

const WorkTimeTable = () => {
  const { workTimePaginated, setRequest, loading } = useWorkTimes();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(
    () => workTimePaginated.data.map(toDataWorkTimeTable),
    [workTimePaginated.data]
  );

  return (
    <MainTable
      columns={workTimeTableColumns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default WorkTimeTable;
