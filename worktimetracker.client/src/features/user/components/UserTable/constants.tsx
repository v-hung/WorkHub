import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";

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
    width: "12rem",
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
        <ActionDeleteRender id={record.id} />
      </Space>
    ),
  },
];

const ActionDeleteRender: FC<{ id: string }> = ({ id }) => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });

  return (
    <Popconfirm
      title="Delete the user"
      description="Are you sure to delete this user?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
