import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useTeams } from "../hooks/useTeams";
import { useTeamAction } from "../hooks/useTeamAction";
import { TeamDtoPaginated, PagedRequest } from "@/generate-api";

type TeamContextType = {
  teamPaginated: TeamDtoPaginated;
  updateRequest: (updater?: SetStateAction<PagedRequest>) => void;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const TeamContext = createContext<TeamContextType | null>(null);

export const TeamProvider: FC<PropsWithChildren> = ({ children }) => {
  const { teamPaginated, updateRequest, loading } = useTeams();
  const { deleteRecord } = useTeamAction();

  return (
    <TeamContext.Provider
      value={{ teamPaginated, updateRequest, loading, deleteRecord }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => {
  const currentContext = useContext(TeamContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
