import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useTeamContext } from "../../contexts/TeamContext";
import { TeamDto } from "@/generate-api";

export const teamTableColumns: TableProps<TeamDto>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Total Members",
    dataIndex: "totalMembers",
    key: "totalMembers",
  },
  {
    title: "Active Projects",
    dataIndex: "activeProjects",
    key: "activeProjects",
  },
  {
    title: "Manager",
    dataIndex: "manager",
    key: "manager",
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
            href={`/teams/${record.id}`}
            size="small"
            color="primary"
            variant="outlined"
          >
            View
          </ButtonLink>
          <ButtonLink
            href={`/teams/${record.id}/edit`}
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

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { setRequest, deleteRecord } = useTeamContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the team"
      description="Are you sure to delete this team?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
