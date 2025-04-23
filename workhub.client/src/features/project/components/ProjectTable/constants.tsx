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
import { useProjectsContext } from "../../contexts/ProjectContext";
import { Permission, ProjectDto, UserMinimalDto } from "@/generate-api";
import { format } from "@/utils/date.utils";
import { getUniqueColor } from "@/utils/color.utils";
import { differenceInDays } from "date-fns";
import { hasPermission } from "@/utils/hasPermission";

export const projectTableColumns: TableProps<ProjectDto>["columns"] = [
  { title: "Name", dataIndex: "name", key: "name" },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Completion Time",
    key: "completionTime",
    render: (_, record) => {
      if (!record.startDate || !record.endDate) return "N/A";

      const startDate = format(record.startDate, "dd/MM/yyyy");
      const endDate = format(record.endDate, "dd/MM/yyyy");

      const daysDifference = differenceInDays(record.endDate, record.startDate);

      return (
        <>
          <span>{`${startDate} - ${endDate}`}</span>
          {daysDifference && <b>&nbsp;({daysDifference} Days)</b>}
        </>
      );
    },
  },
  {
    title: "Team",
    key: "team",
    render: (_, record) =>
      record.team ? (
        <Tag color={getUniqueColor("team-" + record.team.id)}>
          {record.team.name}
        </Tag>
      ) : (
        "N/A"
      ),
  },
  {
    title: "Members",
    key: "members",
    render: (_, record) => {
      const members: UserMinimalDto[] = [
        ...(record.manager ? [record.manager] : []),
        ...(record.members ?? []),
      ];

      if (members.length === 0) return "No members";

      const uniqueMembers = Array.from(
        new Map(members.map((m) => [m.id, m])).values()
      );

      const colors = uniqueMembers.map((v) =>
        getUniqueColor("user-" + v.id, true)
      );

      return (
        <Avatar.Group max={{ count: 5 }}>
          {uniqueMembers.map((member, index) => (
            <Tooltip
              key={member.id || index}
              title={member.fullName}
              placement="top"
            >
              <Avatar
                size={30}
                style={{
                  backgroundColor: colors[index],
                  border:
                    member.id === record.manager?.id
                      ? "1px solid #eb2f96"
                      : "none",
                }}
                icon={<IIonPerson />}
              />
            </Tooltip>
          ))}
        </Avatar.Group>
      );
    },
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
            href={`/projects/${record.id}`}
            size="small"
            color="primary"
            variant="outlined"
          >
            View
          </ButtonLink>

          {hasPermission(Permission.PermissionsProjectsEdit) ? (
            <ButtonLink
              href={`/projects/${record.id}/edit`}
              size="small"
              color="cyan"
              variant="outlined"
            >
              Edit
            </ButtonLink>
          ) : null}

          {hasPermission(Permission.PermissionsProjectsDelete) ? (
            <ActionDeleteRender id={record.id} />
          ) : null}
        </Space>
      </div>
    ),
  },
];

const ActionDeleteRender: FC<{ id: number }> = ({ id }) => {
  const { setRequest, deleteRecord } = useProjectsContext();

  const confirm = async () => {
    await deleteRecord(id);

    setRequest((state) => ({
      ...state,
      pageNumber: 1,
    }));
  };

  return (
    <Popconfirm
      title="Delete the project"
      description="Are you sure to delete this project?"
      onConfirm={confirm}
      placement="bottomRight"
    >
      <Button size="small" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
