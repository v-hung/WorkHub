import { UserMinimalDto } from "@/generate-api";
import { getUniqueColor } from "@/utils/color.utils";
import { Avatar, Tooltip } from "antd";
import type { ComponentProps, FC } from "react";

type State = ComponentProps<typeof Avatar.Group> & {
  manager?: UserMinimalDto | undefined;
  members?: UserMinimalDto[] | null | undefined;
};

const UserTableItem: FC<State> = (props) => {
  const { manager, members, ...rest } = props;

  const users: UserMinimalDto[] = [
    ...(manager ? [manager] : []),
    ...(members ?? []),
  ];

  if (users.length === 0) return "No members";

  const uniqueMembers = Array.from(
    new Map(users.map((m) => [m.id, m])).values()
  );

  const colors = uniqueMembers.map((v) => getUniqueColor("user-" + v.id, true));

  return (
    <Avatar.Group max={{ count: 5 }} {...rest}>
      {uniqueMembers.map((member, index) => (
        <Tooltip
          key={member.id || index}
          title={member.fullName}
          placement="top"
        >
          <Avatar
            size={30}
            style={{
              backgroundColor: colors[index],
              border: member.id === manager?.id ? "1px solid #eb2f96" : "none",
            }}
            icon={<IIonPerson />}
          />
        </Tooltip>
      ))}
    </Avatar.Group>
  );
};

export default UserTableItem;
