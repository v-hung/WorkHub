import { format } from "@/common/utils/date.util";
import {
  RequestCombinedMinimalDto,
  RequestStatus,
  RequestType,
} from "@/generate-api";
import { Badge, Button, Popconfirm, Space, TableProps, Tag } from "antd";
import { useState } from "react";

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
        return <Tag color="blue">{record.requestType}</Tag>;
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
      render: (_, record) => <StatusCell status={record.status} />,
    },
    {
      title: "Action",
      key: "action",
      width: "10rem",
    },
  ];

const StatusCell = ({ status }: { status: RequestStatus }) => {
  const [hovered, setHovered] = useState(false);

  const onCancel = () => {
    console.log("Cancel request");
  };

  return (
    <Space
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Badge status="success" text={status} />
      {hovered && (
        <Popconfirm
          title="Bạn có chắc muốn hủy?"
          okText="Đồng ý"
          cancelText="Không"
          onConfirm={() => onCancel()}
        >
          <Button
            type="primary"
            danger
            size="small"
            // icon={<StopOutlined />}
          >
            Hủy
          </Button>
        </Popconfirm>
      )}
    </Space>
  );
};
