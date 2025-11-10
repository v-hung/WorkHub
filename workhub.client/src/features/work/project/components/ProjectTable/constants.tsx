import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useProjectsContext } from "../../contexts/ProjectContext";
import { Permission, ProjectDto } from "@/generate-api";
import { format } from "@/utils/date.utils";
import { differenceInDays } from "date-fns";
import { hasPermission } from "@/utils/hasPermission";
import UserTableItem from "@/features/organization/user/components/UserTableItem/UserTableItem";
import TeamTableItem from "@/features/organization/team/components/TeamTableItem/TeamTableItem";

export const projectTableColumns: TableProps<ProjectDto>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Completion Time",
    key: "completionTime",
    render: (_, record) => {
      if (!record.startDate || !record.endDate) return "N/A";

      const startDate = format(record.startDate, "dd/MM/yyyy");
      const endDate = format(record.endDate, "dd/MM/yyyy");

      const daysDifference = differenceInDays(record.endDate, record.startDate);

      return (
        <>
          <div>{`${startDate} - ${endDate}`}</div>
          <div>{daysDifference && <b>({daysDifference} Days)</b>}</div>
        </>
      );
    },
  },
  {
    title: "Team",
    key: "team",
    render: (_, record) => <TeamTableItem team={record.team} />,
  },
  {
    title: "Members",
    key: "members",
    render: (_, record) => (
      <UserTableItem manager={record.manager} members={record.members} />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
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

          {hasPermission(Permission.PermissionsProjectsEdit) ? (
            <ButtonLink
              href={`/projects/${record.id}/edit`}
              size="small"
              color="cyan"
              variant="outlined"
            >
              Edit
            </ButtonLink>
          ) : null}

          {hasPermission(Permission.PermissionsProjectsDelete) ? (
            <ActionDeleteRender id={record.id} />
          ) : null}
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { updateRequest, deleteRecord } = useProjectsContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
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
