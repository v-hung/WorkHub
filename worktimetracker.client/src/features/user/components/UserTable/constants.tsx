import { Space, TableProps, Tag } from "antd";

export class DataUserTableType {
  "key": string;
  "id": string;
  "email": string;
  "fullName": string;
  "image"?: string | null;
  "createdAt": Date;
}

export const userTableColumns: TableProps<DataUserTableType>["columns"] = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "FullName",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    // render
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.fullName}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
