import { TableProps } from "antd";
import { DataTimesheetTableType } from "../TimesheetTable/constants";

export const timesheetColumns: TableProps<DataTimesheetTableType>["columns"] = [
  {
    title: "Date",
    dataIndex: "dateString",
    key: "dateString",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
  },
  { title: "End Time", key: "endTime", dataIndex: "endTime", width: "16%" },
  {
    title: "Total Work",
    key: "workMinutes",
    dataIndex: "workMinutes",
  },
];
