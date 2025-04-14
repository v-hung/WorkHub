import { format } from "@/common/utils/date.util";
import { useCancelRequest } from "@/features/request/hooks/useCancelRequest";
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
        };

        return <Tag color={colorMap[requestType]}>{record.requestType}</Tag>;
      },
    },
    {
      title: "Time",
      key: "endTime",
      render: (_, record) =>
        `${format(record.checkIn)} - ${format(record.checkOut)}`,
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
  const { loading, cancel } = useCancelRequest();
  const { getTimesheets, isCurrentMonth } = useTimesheetContext();

  if (request.status !== RequestStatus.Pending) return null;

  const handelCancel = async () => {
    await cancel(request.id, request.requestType);

    if (isCurrentMonth) {
      await getTimesheets();
    }
  };

  return (
    <Spin spinning={loading}>
      <a onClick={handelCancel}>Cancel</a>
    </Spin>
  );
};
