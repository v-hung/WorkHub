import MainTable from "@/ui/table/MainTable";
import { DataTimesheetTableType, timesheetColumns } from "./constants";
import { useEffect, useMemo } from "react";
import { format, formatDuration } from "@/utils/date.utils";
import "./TimesheetTable.css";
import { addMonths, intervalToDuration, isWeekend } from "date-fns";
import { Button, Flex, Table } from "antd";
import DatePicker from "@/ui/form/DatePicker";
import { blue } from "@ant-design/colors";
import { useAuthStore } from "@/stores/auth.store";
import { useTimesheetContext } from "../../context/TimesheetContext";
import { requestTimesheetColumns } from "./nestedConstants";

const TimesheetTable = () => {
  const {
    timesheets,
    loading,
    selectedDate,
    updateSelectedDate,
    isCurrentMonth,
  } = useTimesheetContext();

  const remainingLeaveMinutes = useAuthStore(
    (state) => state.user?.remainingLeaveMinutes
  );

  useEffect(() => {
    updateSelectedDate(new Date());
  }, []);

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
          icon={<IIonChevronBack style={{ width: 20 }} />}
          onClick={() => updateSelectedDate((state) => addMonths(state, -1))}
        ></Button>
        <DatePicker
          picker="month"
          value={selectedDate}
          onChange={(v) => updateSelectedDate(v)}
          showNow
        />
        <Button
          icon={<IIonChevronForward style={{ width: 20 }} />}
          onClick={() => updateSelectedDate((state) => addMonths(state, 1))}
        ></Button>
        <Button
          icon={<IBxCalendarCheck style={{ width: 20 }} />}
          style={{ color: isCurrentMonth ? blue.primary : "inherit" }}
          onClick={() => updateSelectedDate(new Date())}
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
          expandable={{
            expandedRowRender: (record) =>
              (record.requests ?? []).length > 0 ? (
                <Table
                  rowKey="id"
                  dataSource={record.requests ?? undefined}
                  pagination={false}
                  columns={requestTimesheetColumns}
                />
              ) : null,
            rowExpandable: (record) => (record.requests ?? []).length > 0,
          }}
        />
      </div>
    </Flex>
  );
};

export default TimesheetTable;
