import { Avatar, Button } from "antd";
import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement>;

const ProfileHeader: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <div {...rest} className={`${className}`}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <Avatar shape="square" size={100} />
        <div style={{ marginLeft: 20, flexGrow: 1 }}>
          <h2 style={{ marginBottom: 8 }}>user.name</h2>
          <p style={{ marginBottom: 8 }}>user.position</p>
          <Button>Chỉnh sửa</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
