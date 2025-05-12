import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useWorkTimesContext } from "../../contexts/WorkTimeContext";
import { Permission, WorkTimeDto } from "@/generate-api";
import { hasPermission } from "@/utils/hasPermission";

export const workTimeTableColumns: TableProps<WorkTimeDto>["columns"] = [
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
          {hasPermission(Permission.PermissionsWorkTimesEdit) ? (
            <ButtonLink
              href={`/work-times/${record.id}/edit`}
              size="small"
              color="cyan"
              variant="outlined"
            >
              Edit
            </ButtonLink>
          ) : null}

          {hasPermission(Permission.PermissionsWorkTimesDelete) ? (
            <ActionDeleteRender id={record.id} />
          ) : null}
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { updateRequest, deleteRecord } = useWorkTimesContext();

  const confirm = async () => {
    await deleteRecord(id);

    updateRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the workTime"
      description="Are you sure to delete this workTime?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
