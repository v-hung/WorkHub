import MainTable from "@/ui/table/MainTable";
import { DataTimesheetTableType, timesheetColumns } from "./constants";
import { useMemo } from "react";
import { format, formatDuration } from "@/common/utils/date.util";
import "./TimesheetTable.css";
import { addMonths, intervalToDuration, isWeekend } from "date-fns";
import { Button, Flex } from "antd";
import MyDatePicker from "@/ui/form/MyDatePicker";
import { blue } from "@ant-design/colors";
import { useAuthStore } from "@/stores/auth.store";
import { useTimesheetContext } from "../../context/TimesheetContext";

const TimesheetTable = () => {
  const { timesheets, loading, selectedDate, setSelectedDate, isCurrentMonth } =
    useTimesheetContext();

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
    <Flex vertical style={{ height: "100%" }}>
      <Flex
        gap="small"
        justify="space-between"
        align="end"
        flex="none"
        style={{ marginBottom: "1rem" }}
      >
        <div style={{ marginRight: "auto" }}>
          Remaining leave balance:{" "}
          {remainingLeaveMinutes
            ? formatDuration(
                intervalToDuration({
                  start: 0,
                  end: remainingLeaveMinutes * 60 * 1000,
                }),
                { zero: true }
              )
            : "0"}
        </div>
        <Button
          icon={<IIonChevronBack />}
          onClick={() => setSelectedDate((state) => addMonths(state, -1))}
        ></Button>
        <MyDatePicker
          picker="month"
          value={selectedDate}
          onChange={(v) => setSelectedDate(v)}
          showNow
        />
        <Button
          icon={<IIonChevronForward />}
          onClick={() => setSelectedDate((state) => addMonths(state, 1))}
        ></Button>
        <Button
          icon={<IBxCalendarCheck />}
          style={{ color: isCurrentMonth ? blue.primary : "inherit" }}
          onClick={() => setSelectedDate(new Date())}
        ></Button>
      </Flex>

      <div style={{ flexGrow: 1, minHeight: 0 }}>
        <MainTable
          className="timesheet-table"
          columns={timesheetColumns}
          dataSource={data}
          loading={loading}
          pagination={false}
          rowClassName={(record) => {
            return isWeekend(record.date) ? "weekend-row" : "";
          }}
        />
      </div>
    </Flex>
  );
};

export default TimesheetTable;
