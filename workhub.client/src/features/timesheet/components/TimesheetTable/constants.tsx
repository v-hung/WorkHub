import { useRequestContext } from "@/features/request/contexts/RequestContext";
import { RequestType, RequestCombinedMinimalDto } from "@/generate-api";
import { Button, Space, TableProps } from "antd";
import { isBefore, isWeekend } from "date-fns";
import { FC } from "react";

export type DataTimesheetTableType = {
  id: string;
  date: Date;
  dateString: string;
  startTime?: string;
  endTime?: string;
  workMinutes?: number | null;
  requests?: Array<RequestCombinedMinimalDto> | null;
};

export const timesheetColumns: TableProps<DataTimesheetTableType>["columns"] = [
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
  },
  { title: "End Time", key: "endTime", dataIndex: "endTime", width: "16%" },
  {
    title: "Total Work",
    key: "workMinutes",
    dataIndex: "workMinutes",
  },
  {
    title: "Action",
    key: "action",
    width: "10rem",
    render: (_, record) => (
      <TimesheetTableActionRender
        date={record.date}
        startTime={record.startTime}
      />
    ),
  },
];

const TimesheetTableActionRender: FC<{
  date: Date;
  startTime: string | undefined;
}> = ({ date, startTime }) => {
  const { openRequest } = useRequestContext();
  let isShowAction = false;

  if ((!isWeekend(date) && isBefore(date, Date.now())) || startTime) {
    isShowAction = true;
  }

  return isShowAction ? (
    <Space size="small">
      <Button
        size="small"
        color="primary"
        variant="outlined"
        onClick={() =>
          openRequest(RequestType.TimesheetAdjustmentRequest, date)
        }
      >
        Edit
      </Button>
      <Button
        size="small"
        color="cyan"
        variant="outlined"
        onClick={() => openRequest(RequestType.LeaveRequest, date)}
      >
        Leave
      </Button>
    </Space>
  ) : null;
};
