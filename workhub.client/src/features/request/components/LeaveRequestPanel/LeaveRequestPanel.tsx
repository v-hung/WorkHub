import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement>;

const LeaveRequestPanel: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`${className}`}>
      ads
    </div>
  );
};

export default LeaveRequestPanel;
