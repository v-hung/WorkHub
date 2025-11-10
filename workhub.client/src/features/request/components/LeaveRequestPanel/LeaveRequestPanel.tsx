import UserCard from "@/features/organization/user/components/UserCard/UserCard";
import { RequestCombinedDto } from "@/generate-api";
import { format, formatDistanceStrict } from "@/utils/date.utils";
import { Button, Card, Flex, Tag } from "antd";
import { useState, type FC, type HTMLAttributes } from "react";
import "./LeaveRequestPanel.css";
import { calculateWorkDay } from "@/features/work/timesheet/utils/timesheet.util";
import { useLeaveRequestAction } from "../../hooks/useLeaveRequestAction";

type State = HTMLAttributes<HTMLDivElement> & {
  data: RequestCombinedDto;
};

const LeaveRequestPanel: FC<State> = (props) => {
  const { className = "", ...rest } = props;

  const [data, setData] = useState(props.data);

  const { loading, approval, reject } = useLeaveRequestAction();

  return (
    <div {...rest} className={`leave-request-panel ${className}`}>
      <Flex justify="space-between">
        <UserCard user={data.user} showEmail />
        <p>{format(data.createdAt, "HH:mm dd MMM yyyy")}</p>
      </Flex>

      <Card className="card">
        <img src="/logo.png" />
        <Flex
          align="center"
          justify="space-between"
          style={{ marginBottom: "1rem" }}
        >
          <h3>Leave Request</h3>
          <Tag
            color={
              data.status == "PENDING"
                ? "blue"
                : data.status == "REJECTED"
                ? "red"
                : "green"
            }
            className="tag"
          >
            {data.status}
          </Tag>
        </Flex>

        <p>Form "{data.user.email}"</p>
        <label>Reason:</label>
        <p>{data.reason}</p>

        <label>Break Date:</label>
        <p>
          {format(data.date, "yyyy/MM/dd")} {format(data.breakStartDate)} -{" "}
          {format(data.breakEndDate)} (
          {formatDistanceStrict(
            new Date(0),
            new Date(
              calculateWorkDay(
                data.breakStartDate,
                data.breakEndDate,
                data.user.workSchedule
              ) * 3600000
            )
          )}
          )
        </p>

        <Flex gap={8} style={{ marginTop: "1rem" }}>
          <Button
            color="danger"
            variant="filled"
            disabled={loading || ["APPROVED", "REJECTED"].includes(data.status)}
            onClick={() => reject(data.id, (data) => setData(data))}
          >
            Reject
          </Button>
          <Button
            color="primary"
            variant="filled"
            disabled={loading || ["APPROVED", "REJECTED"].includes(data.status)}
            onClick={() => approval(data.id, (data) => setData(data))}
          >
            Approval
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default LeaveRequestPanel;
