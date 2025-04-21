import { TableProps } from "antd";
import { NotificationDto } from "@/generate-api";
import { format } from "@/utils/date.utils";

export const notificationTableColumns: TableProps<NotificationDto>["columns"] =
  [
    { title: "title", dataIndex: "title", key: "title", width: "20%" },
    { title: "Message", dataIndex: "message", key: "description" },
    {
      title: "Date",
      key: "date",
      width: "8rem",
      render: (_, record) => format(record.date, "dd/MM/yyyy"),
    },
  ];
