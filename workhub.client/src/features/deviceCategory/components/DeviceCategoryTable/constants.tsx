import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps, Tag } from "antd";
import { FC } from "react";
import { useDeviceCategoriesContext } from "../../contexts/DeviceCategoryContext";
import { DeviceCategoryDto } from "@/generate-api";
import { getUniqueColor } from "@/common/utils/color.util";

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
      width: "12rem",
      fixed: "right",
      render: (_, record) => (
        <div>
          <Space size="small">
            <ButtonLink
              href={`/device-categories/${record.id}`}
              size="small"
              color="primary"
              variant="outlined"
            >
              View
            </ButtonLink>
            <ButtonLink
              href={`/device-categories/${record.id}/edit`}
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
  const { setRequest, deleteRecord } = useDeviceCategoriesContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
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
