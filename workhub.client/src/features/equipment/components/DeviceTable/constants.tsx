import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps, Tag } from "antd";
import { FC } from "react";
import { useDevicesContext } from "../../contexts/DeviceContext";
import { DeviceDto, Permission } from "@/generate-api";
import { getUniqueColor } from "@/utils/color.utils";
import { hasPermission } from "@/utils/hasPermission";
import UserTableItem from "@/features/organization/user/components/UserTableItem/UserTableItem";

export const deviceTableColumns: TableProps<DeviceDto>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Assigned User",
    key: "assignedUser",
    render: (_, record) => (
      <UserTableItem
        members={record.assignedUser ? [record.assignedUser] : null}
      />
    ),
  },
  {
    title: "Device Categories",
    key: "deviceCategories",
    render: (_, record) =>
      record.deviceCategories
        ? record.deviceCategories.map((v) => (
            <Tag key={v.id} color={getUniqueColor("deviceCategory-" + v.id)}>
              {v.name}
            </Tag>
          ))
        : null,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    width: "9rem",
    fixed: "right",
    render: (_, record) => (
      <div>
        <Space size="small">
          {hasPermission(Permission.PermissionsDevicesEdit) ? (
            <ButtonLink
              href={`/devices/${record.id}/edit`}
              size="small"
              color="cyan"
              variant="outlined"
            >
              Edit
            </ButtonLink>
          ) : null}

          {hasPermission(Permission.PermissionsDevicesDelete) ? (
            <ActionDeleteRender id={record.id} />
          ) : null}
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { updateRequest, deleteRecord } = useDevicesContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the device"
      description="Are you sure to delete this device?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
