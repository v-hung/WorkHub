import {
  Permission,
  SearchOperator,
  UserDto,
  UserPosition,
  UserStatus,
} from "@/generate-api";
import ButtonLink from "@/ui/elements/ButtonLink";
import { hasPermission } from "@/utils/hasPermission";
import { Button, Popconfirm, Space, TableProps } from "antd";
import UserCard from "../UserCard/UserCard";
import { format } from "@/utils/date.utils";
import { FC } from "react";
import { useUserContext } from "../../contexts/UserContext";
import UserTableItem from "../UserTableItem/UserTableItem";
import { getColumnSearchProps } from "@/utils/table.utils";

export const userTableColumns: TableProps<UserDto>["columns"] = [
  {
    title: "User",
    width: "20rem",
    render: (_, record) => <UserCard user={record} showEmail />,
    dataIndex: "email",
    sorter: true,
    ...getColumnSearchProps("email"),
  },
  {
    title: "Supervisor",
    render: (_, record) => (
      <UserTableItem members={record.supervisor ? [record.supervisor] : []} />
    ),
  },
  {
    title: "User Position",
    dataIndex: "userPosition",
    key: "userPosition",
    sorter: true,
    filters: Object.entries(UserPosition).map(([key, value]) => ({
      value,
      text: key,
    })),
  },
  {
    title: "User Status",
    dataIndex: "userStatus",
    key: "userStatus",
    sorter: true,
    filters: Object.entries(UserStatus).map(([key, value]) => ({
      value,
      text: key,
    })),
    defaultFilteredValue: [UserStatus.Active, UserStatus.Onsite],
  },
  {
    title: "CreatedAt",
    key: "createdAt",
    dataIndex: "createdAt",
    render: (_, record) => format(record.createdAt, "dd/MM/yyyy"),
    sorter: true,
    defaultSortOrder: "ascend",
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

export const userTableSearchOperatorMap: Record<string, SearchOperator> = {
  email: SearchOperator.Contains,
};

const ActionDeleteRender: FC<{ id: string }> = ({ id }) => {
  const { updateRequest, deleteRecord } = useUserContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
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
