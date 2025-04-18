import ButtonLink from "@/ui/elements/ButtonLink";
import {
  Avatar,
  Button,
  Popconfirm,
  Space,
  TableProps,
  Tag,
  Tooltip,
} from "antd";
import { FC } from "react";
import { useDevicesContext } from "../../contexts/DeviceContext";
import { DeviceDto } from "@/generate-api";
import { getUniqueColor } from "@/common/utils/color.utils";

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
    render: (_, record) =>
      record.assignedUser ? (
        <Tooltip
          key={record.assignedUser.id}
          title={record.assignedUser.fullName}
          placement="top"
        >
          <Avatar
            size={30}
            style={{
              backgroundColor: getUniqueColor(
                "user-" + record.assignedUser?.id,
                true
              ),
            }}
            icon={<IIonPerson />}
          />
        </Tooltip>
      ) : (
        ""
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
    width: "12rem",
    fixed: "right",
    render: (_, record) => (
      <div>
        <Space size="small">
          <ButtonLink
            href={`/devices/${record.id}`}
            size="small"
            color="primary"
            variant="outlined"
          >
            View
          </ButtonLink>
          <ButtonLink
            href={`/devices/${record.id}/edit`}
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
  const { setRequest, deleteRecord } = useDevicesContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
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
