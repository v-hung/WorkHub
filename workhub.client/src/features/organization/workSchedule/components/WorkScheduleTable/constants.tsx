import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useWorkSchedulesContext } from "../../contexts/WorkScheduleContext";
import { Permission, WorkScheduleDto } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";

export const workScheduleTableColumns: TableProps<WorkScheduleDto>["columns"] =
  [
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Start Time Morning",
      dataIndex: "startTimeMorning",
      key: "startTimeMorning",
    },
    {
      title: "End Time Morning",
      dataIndex: "endTimeMorning",
      key: "endTimeMorning",
    },
    {
      title: "Start Time Afternoon",
      dataIndex: "startTimeAfternoon",
      key: "startTimeAfternoon",
    },
    {
      title: "End Time Afternoon",
      dataIndex: "endTimeAfternoon",
      key: "endTimeAfternoon",
    },
    {
      title: "Allowed Late Minutes",
      dataIndex: "allowedLateMinutes",
      key: "allowedLateMinutes",
    },
    {
      title: "Action",
      key: "action",
      width: "9rem",
      fixed: "right",
      render: (_, record) => (
        <div>
          <Space size="small">
            {hasPermission(Permission.PermissionsWorkSchedulesEdit) ? (
              <ButtonLink
                href={`/work-times/${record.id}/edit`}
                size="small"
                color="cyan"
                variant="outlined"
              >
                Edit
              </ButtonLink>
            ) : null}

            {hasPermission(Permission.PermissionsWorkSchedulesDelete) ? (
              <ActionDeleteRender id={record.id} />
            ) : null}
          </Space>
        </div>
      ),
    },
  ];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { updateRequest, deleteRecord } = useWorkSchedulesContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the workSchedule"
      description="Are you sure to delete this workSchedule?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
