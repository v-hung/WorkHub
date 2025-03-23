import { TimesheetDtoRequestsInner } from "@/generate-api";
import { Button, Space, TableProps } from "antd";
import { isBefore, isWeekend } from "date-fns";

export type DataTimesheetTableType = {
  id: string;
  date: Date;
  dateString: string;
  startTime?: string;
  endTime?: string;
  workMinutes?: number | null;
  requests?: Array<TimesheetDtoRequestsInner> | null;
};

export const userTimesheetColumns: TableProps<DataTimesheetTableType>["columns"] =
  [
    {
      title: "Date",
      dataIndex: "dateString",
      key: "dateString",
      width: "12%",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      width: "16%",
    },
    { title: "End Time", key: "endTime", dataIndex: "endTime", width: "16%" },
    {
      title: "Total Work",
      key: "workMinutes",
      dataIndex: "workMinutes",
      width: "16%",
    },
    { title: "Requests", key: "requests", dataIndex: "requests" },
    {
      title: "Action",
      key: "action",
      width: "10rem",
      render: (_, record) => {
        let isShowAction = false;

        if (
          (!isWeekend(record.date) && isBefore(record.date, Date.now())) ||
          record.startTime
        ) {
          isShowAction = true;
        }

        return isShowAction ? (
          <Space size="small">
            <Button size="small" color="primary" variant="outlined">
              Edit
            </Button>
            <Button size="small" color="cyan" variant="outlined">
              Leave
            </Button>
          </Space>
        ) : null;
      },
    },
  ];
