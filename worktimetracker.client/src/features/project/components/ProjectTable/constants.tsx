import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useProjectsContext } from "../../contexts/ProjectContext";
import { ProjectDto } from "@/generate-api";

export const projectTableColumns: TableProps<ProjectDto>["columns"] = [
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
            href={`/projects/${record.id}`}
            size="small"
            color="primary"
            variant="outlined"
          >
            View
          </ButtonLink>
          <ButtonLink
            href={`/projects/${record.id}/edit`}
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
  const { setRequest, deleteRecord } = useProjectsContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the project"
      description="Are you sure to delete this project?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
