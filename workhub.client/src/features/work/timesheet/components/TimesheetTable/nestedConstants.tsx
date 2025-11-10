import { format } from "@/utils/date.utils";
import { useRequest } from "@/features/request/hooks/useRequest";
import {
  RequestCombinedMinimalDto,
  RequestStatus,
  RequestType,
} from "@/generate-api";
import { Badge, Spin, TableProps, Tag } from "antd";
import { FC } from "react";
import { useTimesheetContext } from "../../context/TimesheetContext";
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
          [RequestType.CancelRequest]: "blue",
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
          [RequestStatus.Pending]: "processing",
          [RequestStatus.Approved]: "success",
          [RequestStatus.Rejected]: "error",
          [RequestStatus.Canceled]: "default",
          [RequestStatus.Superseded]: "warning",
          [RequestStatus.Used]: "default",
        };
        return <Badge status={statusMap[status]} text={record.status} />;
      },
    },
    {
      title: "Action",
      key: "action",
      width: "10rem",
      render: (_, record) => <RequestTableActionRender request={record} />,
    },
  ];

const RequestTableActionRender: FC<{
  request: RequestCombinedMinimalDto;
}> = ({ request }) => {
  const { loading, cancel } = useRequest();
  const { getCurrentTimesheets, isCurrentMonth } = useTimesheetContext();

  if (request.status !== RequestStatus.Pending) return null;

  const handelCancel = async () => {
    await cancel(request.id, request.requestType);

    if (isCurrentMonth) {
      await getCurrentTimesheets(new Date());
    }
  };

  return (
    <Spin spinning={loading}>
      <a onClick={handelCancel}>Cancel</a>
    </Spin>
  );
};
