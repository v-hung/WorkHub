import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useTeamContext } from "../../contexts/TeamContext";
import { Permission, TeamDto } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";
import UserTableItem from "@/features/organization/user/components/UserTableItem/UserTableItem";
import TeamTableItem from "../TeamTableItem/TeamTableItem";

export const teamTableColumns: TableProps<TeamDto>["columns"] = [
  { title: "Name", render: (_, record) => <TeamTableItem team={record} /> },
  { title: "Description", dataIndex: "description", key: "description" },
  {
    title: "Members",
    key: "members",
    render: (_, record) => (
      <UserTableItem manager={record.manager} members={record.members} />
    ),
  },
  {
    title: "Projects",
    dataIndex: "projects",
    key: "projects",
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

          {hasPermission(Permission.PermissionsTeamsEdit) ? (
            <ButtonLink
              href={`/teams/${record.id}/edit`}
              size="small"
              color="cyan"
              variant="outlined"
            >
              Edit
            </ButtonLink>
          ) : null}

          {hasPermission(Permission.PermissionsTeamsDelete) ? (
            <ActionDeleteRender id={record.id} />
          ) : null}
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { updateRequest, deleteRecord } = useTeamContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
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
