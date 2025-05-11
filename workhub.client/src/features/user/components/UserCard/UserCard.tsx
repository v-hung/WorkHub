import { UserMinimalDto } from "@/generate-api";
import { Avatar } from "antd";
import type { FC, HTMLAttributes } from "react";
import "./UserCard.css";

type State = HTMLAttributes<HTMLDivElement> & {
  user: UserMinimalDto;
  size?: number;
  showEmail?: boolean;
};

const UserCard: FC<State> = (props) => {
  const {
    className = "",
    showEmail = false,
    size = showEmail ? 40 : 30,
    user,
    ...rest
  } = props;
  return (
    <div {...rest} className={`user-card ${className}`}>
      <Avatar
        shape="circle"
        size={size}
        src={user?.image}
        icon={<IIonPerson />}
      />
      <div>
        <p className="user-card__title">{user.fullName}</p>
        {showEmail && <p className="user-card__text">{user.email}</p>}
      </div>
    </div>
  );
};

export default UserCard;
