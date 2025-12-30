import UserCard from "@/features/organization/user/components/UserCard/UserCard";
import { RequestCombinedDetailsDto } from "@/generate-api";
import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement> & {
  data: RequestCombinedDetailsDto;
};

const TimesheetAdjustmentRequestPanel: FC<State> = (props) => {
  const { className = "", data, ...rest } = props;
  return (
    <div {...rest} className={`${className}`}>
      <UserCard user={data.approver} />
    </div>
  );
};

export default TimesheetAdjustmentRequestPanel;
