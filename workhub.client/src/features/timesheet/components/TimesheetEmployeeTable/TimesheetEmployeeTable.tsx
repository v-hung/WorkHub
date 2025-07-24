import DatePicker from "@/ui/form/DatePicker";
import MainTable from "@/ui/table/MainTable";
import { Button, Flex, Table } from "antd";
import { addMonths, isWeekend } from "date-fns";
import { useMemo, useState, type FC, type HTMLAttributes } from "react";
import { useTimesheets } from "../../hooks/useTimesheets";
import { blue } from "@ant-design/colors";
import { timesheetColumns } from "./constants";
import UserSelect from "@/features/user/components/UserSelect/UserSelect";
import { DataTimesheetTableType } from "../TimesheetTable/constants";
import { format } from "@/utils/date.utils";
import { requestTimesheetColumns } from "./nestedConstants";
import "./TimesheetEmployeeTable.css";
import { useTimesheetEmployeeContext } from "../../context/TimesheetEmployeeContext";

type State = HTMLAttributes<HTMLDivElement>;

const TimesheetEmployeeTable: FC<State> = () => {
  const {
    request,
    timesheetPaginated,
    updateRequest,
    isCurrentMonth,
    loading,
  } = useTimesheetEmployeeContext();

  const [selectUserId, setSelectUserId] = useState<string | null>(null);

  const data = useMemo(
    () =>
      timesheetPaginated?.data.map<DataTimesheetTableType>((v) => ({
        id: v.id,
        date: v.date,
        dateString: format(v.date, "dd/MM/yyyy"),
        startTime: v.startTime ? format(v.startTime) : undefined,
        endTime: v.endTime ? format(v.endTime) : undefined,
        workMinutes: v.workMinutes,
        requests: v.requests,
      })),
    [timesheetPaginated]
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
          <UserSelect
            style={{ width: "15rem" }}
            placeholder="PLease choose user"
            value={selectUserId}
            onChange={(value: unknown) => {
              const userId = typeof value === "string" ? value : null;
              setSelectUserId(userId);
              updateRequest((state) => ({
                ...state,
                userIds: userId ? [userId] : [],
              }));
            }}
          />
        </div>

        <Button
          icon={<IIonChevronBack style={{ width: 20 }} />}
          onClick={() =>
            updateRequest((state) => ({
              ...state,
              date: addMonths(state.date, -1),
            }))
          }
        ></Button>
        <DatePicker
          picker="month"
          value={request.date}
          onChange={(v) =>
            updateRequest((state) => ({
              ...state,
              date: v,
            }))
          }
          showNow
        />
        <Button
          icon={<IIonChevronForward style={{ width: 20 }} />}
          onClick={() =>
            updateRequest((state) => ({
              ...state,
              date: addMonths(state.date, 1),
            }))
          }
        ></Button>
        <Button
          icon={<IBxCalendarCheck style={{ width: 20 }} />}
          style={{ color: isCurrentMonth ? blue.primary : "inherit" }}
          onClick={() =>
            updateRequest((state) => ({
              ...state,
              date: new Date(),
            }))
          }
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

export default TimesheetEmployeeTable;
