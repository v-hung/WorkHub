import { Permission, UserDto } from "@/generate-api";
import ButtonLink from "@/ui/elements/ButtonLink";
import { hasPermission } from "@/utils/hasPermission";
import { Space, TableProps } from "antd";
import UserCard from "../UserCard/UserCard";

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
    width: "10rem",
  },
  {
    title: "Team",
    render: (_, record) => record.team?.name || "No team",
    width: "10rem",
  },
  {
    title: "CreatedAt",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "10rem",
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

        {/* {hasPermission(Permission.PermissionsUsersDelete) ? (
          <ActionDeleteRender id={record.id} />
        ) : null} */}
      </Space>
    ),
  },
];
