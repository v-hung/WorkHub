import type { FC, HTMLAttributes } from "react";
import "./Loading.css";

type State = HTMLAttributes<HTMLDivElement>;

const Loading: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`loading-container ${className}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
