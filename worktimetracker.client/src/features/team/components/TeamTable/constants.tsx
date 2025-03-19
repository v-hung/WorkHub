import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useTeamsContext } from "../../contexts/TeamContext";
import { UserMinimalDto } from "@/generate-api";

export type DataTeamTableType = {
  key: number;
  name: string;
  description?: string | null;
  totalMembers: number;
  completedProjects: number;
  activeProjects: number;
  manager?: UserMinimalDto;
};

export const teamTableColumns: TableProps<DataTeamTableType>["columns"] = [
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
            href={`/work-times/${record.key}`}
            size="small"
            color="primary"
            variant="outlined"
          >
            View
          </ButtonLink>
          <ButtonLink
            href={`/work-times/${record.key}/edit`}
            size="small"
            color="cyan"
            variant="outlined"
          >
            Edit
          </ButtonLink>
          <ActionDeleteRender id={record.key} />
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { setRequest, deleteRecord } = useTeamsContext();

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
