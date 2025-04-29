import { UserDto } from "@/generate-api";
import { Avatar } from "antd";
import type { FC, HTMLAttributes } from "react";
import "./UserCard.css";

type State = HTMLAttributes<HTMLDivElement> & {
  user: UserDto;
};

const UserCard: FC<State> = (props) => {
  const { className = "", user, ...rest } = props;
  return (
    <div {...rest} className={`user-card ${className}`}>
      <Avatar
        shape="circle"
        size={30}
        src={user?.image}
        icon={<IIonPerson />}
      />
      <p className="card__title">{user.fullName}</p>
    </div>
  );
};

export default UserCard;
