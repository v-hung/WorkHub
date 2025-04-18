import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useRolesContext } from "../../contexts/RoleContext";
import { RoleDto } from "@/generate-api";

export const roleTableColumns: TableProps<RoleDto>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    key: "action",
    width: "12rem",
    fixed: "right",
    render: (_, record) => (
      <div>
        <Space size="small">
          <ButtonLink
            href={`/roles/${record.id}/edit`}
            size="small"
            color="cyan"
            variant="outlined"
          >
            Edit
          </ButtonLink>
          <ActionDeleteRender id={record.id} />
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: string }> = ({ id }) => {
  const { setRequest, deleteRecord } = useRolesContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the role"
      description="Are you sure to delete this role?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
