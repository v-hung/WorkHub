import { TableProps } from "antd";
import { NotificationDto } from "@/generate-api";
import { format } from "@/common/utils/date.util";

export const notificationTableColumns: TableProps<NotificationDto>["columns"] =
  [
    { title: "title", dataIndex: "title", key: "title", width: "20%" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Date",
      key: "date",
      width: "5rem",
      render: (_, record) => format(record.date, "dd/MM/yyyy"),
    },
  ];
