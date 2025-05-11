import type { FC, HTMLAttributes } from "react";
import "./IconButton.css";

type State = HTMLAttributes<HTMLDivElement>;

const IconButton: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return <div {...rest} className={`icon-button ${className}`} />;
};

export default IconButton;
