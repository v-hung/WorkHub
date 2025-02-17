import { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement>;

const UserFormCreate: FC<State> = (props) => {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={`form-container ${className}`}>
      asd
    </div>
  );
};

export default UserFormCreate;
