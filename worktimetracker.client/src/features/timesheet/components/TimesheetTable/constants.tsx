import { TimesheetMinimalDtoRequestsInner } from "@/generate-api/models/TimesheetMinimalDtoRequestsInner";
import { Button, Space, TableProps } from "antd";

export type DataTimesheetTableType = {
  key: string;
  date: string;
  startTime: string;
  endTime?: string;
  workMinutes?: number | null;
  requests?: Array<TimesheetMinimalDtoRequestsInner> | null;
};

export const userTimesheetColumns: TableProps<DataTimesheetTableType>["columns"] =
  [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    { title: "Start Time", dataIndex: "startTime", key: "startTime" },
    { title: "End Time", key: "endTime", dataIndex: "endTime" },
    { title: "Total Work", key: "workMinutes", dataIndex: "workMinutes" },
    { title: "Requests", key: "requests", dataIndex: "requests" },
    {
      title: "Action",
      key: "action",
      width: "10rem",
      render: (_, __) => (
        <Space size="small">
          <Button size="small" color="primary" variant="outlined">
            Edit
          </Button>
          <Button size="small" color="cyan" variant="outlined">
            Leave
          </Button>
        </Space>
      ),
    },
  ];
