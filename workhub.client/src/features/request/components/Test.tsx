import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement>;

const Test: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`${className}`}>
      asd
    </div>
  );
};

export default Test;
