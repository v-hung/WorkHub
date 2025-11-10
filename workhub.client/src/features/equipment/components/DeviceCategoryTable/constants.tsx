import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps, Tag } from "antd";
import { FC } from "react";
import { useDeviceCategoriesContext } from "../../../equipment/contexts/DeviceCategoryContext";
import { DeviceCategoryDto, Permission } from "@/generate-api";
import { getUniqueColor } from "@/utils/color.utils";
import { hasPermission } from "@/utils/hasPermission";

export const deviceCategoryTableColumns: TableProps<DeviceCategoryDto>["columns"] =
  [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Devices",
      key: "devices",
      render: (_, record) =>
        record.devices
          ? record.devices.map((v) => (
              <Tag key={v.id} color={getUniqueColor("device-" + v.id)}>
                {v.name}
              </Tag>
            ))
          : null,
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
                href={`/device-categories/${record.id}/edit`}
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
  const { updateRequest, deleteRecord } = useDeviceCategoriesContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the deviceCategory"
      description="Are you sure to delete this deviceCategory?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
