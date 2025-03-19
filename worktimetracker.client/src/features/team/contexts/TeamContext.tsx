import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useTeams } from "../hooks/useTeams";
import { useTeamAction } from "../hooks/useTeamAction";
import { TeamDtoPaginated } from "@/generate-api";

type TeamsContextType = {
  teamPaginated: TeamDtoPaginated;
  setRequest: Dispatch<
    SetStateAction<{
      pageNumber: number;
      pageSize: number;
      searchString: string;
    }>
  >;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const TeamsContext = createContext<TeamsContextType | null>(null);

export const TeamProvider: FC<PropsWithChildren> = ({ children }) => {
  const { teamPaginated, setRequest, loading } = useTeams();
  const { deleteRecord } = useTeamAction();

  return (
    <TeamsContext.Provider
      value={{ teamPaginated, setRequest, loading, deleteRecord }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeamsContext = () => {
  const currentContext = useContext(TeamsContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
