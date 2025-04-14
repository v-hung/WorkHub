import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useWorkTimes } from "../hooks/useWorkTimes";
import { useWorkTimeAction } from "../hooks/useWorkTimeAction";
import { WorkTimeDtoPaginated } from "@/generate-api";

type WorkTimesContextType = {
  workTimePaginated: WorkTimeDtoPaginated;
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

const WorkTimesContext = createContext<WorkTimesContextType | null>(null);

export const WorkTimeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { workTimePaginated, setRequest, loading } = useWorkTimes();
  const { deleteRecord } = useWorkTimeAction();

  return (
    <WorkTimesContext.Provider
      value={{ workTimePaginated, setRequest, loading, deleteRecord }}
    >
      {children}
    </WorkTimesContext.Provider>
  );
};

export const useWorkTimesContext = () => {
  const currentContext = useContext(WorkTimesContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
