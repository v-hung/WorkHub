import { TeamMinimalDto } from "@/generate-api";
import { getUniqueColor } from "@/utils/color.utils";
import { Tag } from "antd";
import type { FC } from "react";

type State = {
  team?: TeamMinimalDto | null;
};

const TeamTableItem: FC<State> = ({ team }) => {
  if (!team) return "No team";

  return <Tag color={getUniqueColor("team-" + team.id)}>{team.name}</Tag>;
};

export default TeamTableItem;
