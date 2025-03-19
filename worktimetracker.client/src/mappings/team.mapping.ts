import { DataTeamTableType } from "@/features/team/components/TeamTable/constants";
import { CreateTeamCommand, TeamDto } from "@/generate-api";

export const toDataTeamTable = (data: TeamDto): DataTeamTableType => {
  return {
    ...data,
    key: data.id,
  };
};

export const toTeamRequest = (data: TeamDto): CreateTeamCommand => ({
  ...data,
});
