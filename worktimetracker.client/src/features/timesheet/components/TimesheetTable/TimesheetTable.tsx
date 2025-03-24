import MainTable from "@/ui/table/MainTable";
import { DataTimesheetTableType, userTimesheetColumns } from "./constants";
import { useMemo } from "react";
import { useTimesheets } from "../../hooks/useTimesheets";
import { format, formatDuration } from "@/common/utils/date.util";
import "./TimesheetTable.css";
import { intervalToDuration, isWeekend } from "date-fns";
import { Button, Flex } from "antd";
import MyDatePicker from "@/ui/form/MyDatePicker";
import { blue } from "@ant-design/colors";
import { useAuthStore } from "@/stores/auth.store";

const TimesheetTable = () => {
  const { timesheets, loading, selectedDate, setSelectedDate, isCurrentMonth } =
    useTimesheets();

  const remainingLeaveMinutes = useAuthStore(
    (state) => state.user?.remainingLeaveMinutes
  );

  const data = useMemo(
    () =>
      timesheets.map<DataTimesheetTableType>((v) => ({
        id: v.id,
        date: v.date,
        dateString: format(v.date, "dd/MM/yyyy"),
        startTime: v.startTime ? format(v.startTime) : undefined,
        endTime: v.endTime ? format(v.endTime) : undefined,
        workMinutes: v.workMinutes,
        requests: v.requests,
      })),
    [timesheets]
  );

  return (
    <>
      <Flex
        gap="small"
        justify="space-between"
        align="end"
        style={{ marginBottom: "1rem" }}
      >
        <div style={{ marginRight: "auto" }}>
          Remaining leave balance:{" "}
          {formatDuration(
            intervalToDuration({
              start: 0,
              end: (remainingLeaveMinutes ?? 0) * 60 * 1000,
            }),
            { zero: true }
          )}
        </div>
        <MyDatePicker
          picker="month"
          value={selectedDate}
          onChange={(v) => setSelectedDate(v)}
          showNow
        />
        <Button
          icon={<IBxCalendarCheck />}
          style={{ color: isCurrentMonth ? blue.primary : "inherit" }}
          onClick={() => setSelectedDate(new Date())}
        ></Button>
      </Flex>

      <MainTable
        className="timesheet-table"
        columns={userTimesheetColumns}
        dataSource={data}
        loading={loading}
        pagination={false}
        rowClassName={(record) => {
          return isWeekend(record.date) ? "weekend-row" : "";
        }}
      />
    </>
  );
};

export default TimesheetTable;
