import { Permission, UserDto } from "@/generate-api";
import ButtonLink from "@/ui/elements/ButtonLink";
import { hasPermission } from "@/utils/hasPermission";
import { Button, Popconfirm, Space, TableProps } from "antd";
import UserCard from "../UserCard/UserCard";
import { format } from "@/utils/date.utils";
import { FC } from "react";
import { useUserContext } from "../../contexts/UserContext";
import TeamTableItem from "@/features/team/components/TeamTableItem/TeamTableItem";

export const userTableColumns: TableProps<UserDto>["columns"] = [
  {
    title: "User",
    width: "20rem",
    render: (_, record) => <UserCard user={record} />,
  },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "User Position",
    dataIndex: "userPosition",
    key: "userPosition",
  },
  {
    title: "User Status",
    dataIndex: "userStatus",
    key: "userStatus",
    // width: "10rem",
  },
  {
    title: "Team",
    render: (_, record) => <TeamTableItem team={record.team} />,
  },
  {
    title: "CreatedAt",
    render: (_, record) => format(record.createdAt, "dd/MM/yyyy"),
    // width: "10rem",
  },
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

        {hasPermission(Permission.PermissionsUsersEdit) ? (
          <ButtonLink
            href={`/users/${record.id}/edit`}
            size="small"
            color="cyan"
            variant="outlined"
          >
            Edit
          </ButtonLink>
        ) : null}

        {hasPermission(Permission.PermissionsUsersDelete) ? (
          <ActionDeleteRender id={record.id} />
        ) : null}
      </Space>
    ),
  },
];

const ActionDeleteRender: FC<{ id: string }> = ({ id }) => {
  const { setRequest, deleteRecord } = useUserContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

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
