import UserCard from "@/features/user/components/UserCard/UserCard";
import { RequestCombinedDto } from "@/generate-api";
import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement> & {
  data: RequestCombinedDto;
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
