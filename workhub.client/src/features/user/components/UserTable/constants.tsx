import ButtonLink from "@/ui/elements/ButtonLink";
import { Space, TableProps } from "antd";

export type DataUserTableType = {
  id: string;
  email: string;
  fullName: string;
  image?: string | null;
  createdAt: string;
};

export const userTableColumns: TableProps<DataUserTableType>["columns"] = [
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "FullName", dataIndex: "fullName", key: "fullName" },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    // render
  },
  { title: "CreatedAt", dataIndex: "createdAt", key: "createdAt" },
  {
    title: "Action",
    key: "action",
    width: "10rem",
    render: (_, record) => (
      <Space size="small">
        <ButtonLink
          href={`/users/${record.id}`}
          size="small"
          color="primary"
          variant="outlined"
        >
          View
        </ButtonLink>
        <ButtonLink
          href={`/users/${record.id}/edit`}
          size="small"
          color="cyan"
          variant="outlined"
        >
          Edit
        </ButtonLink>
        {/* <ActionDeleteRender id={record.id} /> */}
      </Space>
    ),
  },
];
