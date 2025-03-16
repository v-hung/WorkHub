import MainTable from "@/ui/table/MainTable";
import { userTimesheetColumns } from "./constants";
import { useMemo } from "react";
import { useTimesheets } from "../../hooks/useTimesheets";
import { toDataTimesheetTable } from "@/mappings/timesheet.mapping";

const TimesheetTable = () => {
  const { timesheets, loading } = useTimesheets();

  const data = useMemo(
    () => timesheets.map(toDataTimesheetTable),
    [timesheets]
  );

  return (
    <MainTable
      columns={userTimesheetColumns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default TimesheetTable;
