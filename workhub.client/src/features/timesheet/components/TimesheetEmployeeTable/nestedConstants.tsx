import { format } from "@/utils/date.utils";
import {
  RequestCombinedMinimalDto,
  RequestStatus,
  RequestType,
} from "@/generate-api";
import { Badge, TableProps, Tag } from "antd";
import { PresetStatusColorType } from "antd/es/_util/colors";

export const requestTimesheetColumns: TableProps<RequestCombinedMinimalDto>["columns"] =
  [
    {
      title: "Date",
      render: (_, record) => format(record.date, "dd/MM/yyyy"),
      key: "date",
    },
    {
      title: "Request Type",
      key: "requestType",
      render: (_, record) => {
        const { requestType } = record;

        const colorMap = {
          [RequestType.LeaveRequest]: "green",
          [RequestType.TimesheetAdjustmentRequest]: "orange",
          [RequestType.OvertimeRequest]: "purple",
          [RequestType.WorkFromHomeRequest]: "blue",
        };

        return <Tag color={colorMap[requestType]}>{record.requestType}</Tag>;
      },
    },
    {
      title: "Time",
      key: "endTime",
      render: (_, record) =>
        `${format(record.breakStartDate)} - ${format(record.breakEndDate)}`,
    },
    {
      title: "Reason",
      key: "reason",
      dataIndex: "reason",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => {
        const { status } = record;

        const statusMap: Record<RequestStatus, PresetStatusColorType> = {
          [RequestStatus.Pending]: "default",
          [RequestStatus.Approved]: "success",
          [RequestStatus.Rejected]: "error",
        };
        return <Badge status={statusMap[status]} text={record.status} />;
      },
    },
  ];
