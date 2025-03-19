import ButtonLink from "@/ui/elements/ButtonLink";
import { Button, Popconfirm, Space, TableProps } from "antd";
import { FC } from "react";
import { useWorkTimesContext } from "../../contexts/WorkTimeContext";

export type DataWorkTimeTableType = {
  key: number;
  title: string;
  startTimeMorning: string;
  endTimeMorning: string;
  startTimeAfternoon: string;
  endTimeAfternoon: string;
  allowedLateMinutes: number;
};

export const workTimeTableColumns: TableProps<DataWorkTimeTableType>["columns"] =
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
      width: "12rem",
      fixed: "right",
      render: (_, record) => (
        <div>
          <Space size="small">
            <ButtonLink
              href={`/work-times/${record.key}`}
              size="small"
              color="primary"
              variant="outlined"
            >
              View
            </ButtonLink>
            <ButtonLink
              href={`/work-times/${record.key}/edit`}
              size="small"
              color="cyan"
              variant="outlined"
            >
              Edit
            </ButtonLink>
            <ActionDeleteRender id={record.key} />
          </Space>
        </div>
      ),
    },
  ];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { setRequest, deleteRecord } = useWorkTimesContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
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
