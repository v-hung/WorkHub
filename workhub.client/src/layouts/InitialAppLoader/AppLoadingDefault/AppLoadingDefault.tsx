import type { FC, HTMLAttributes } from "react";
import "./AppLoadingDefault.css";

type State = HTMLAttributes<HTMLDivElement>;

const AppLoadingDefault: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`app-loading-container ${className}`}>
      <div className="app-loading-container__loader"></div>
    </div>
  );
};

export default AppLoadingDefault;
