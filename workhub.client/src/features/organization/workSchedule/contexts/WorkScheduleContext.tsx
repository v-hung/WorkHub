import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useWorkSchedules } from "../hooks/useWorkSchedules";
import { useWorkScheduleAction } from "../hooks/useWorkScheduleAction";
import { WorkScheduleDtoPaginated, PagedRequest } from "@/generate-api";

type WorkSchedulesContextType = {
  workSchedulePaginated: WorkScheduleDtoPaginated;
  updateRequest: (updater?: SetStateAction<PagedRequest>) => void;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const WorkSchedulesContext = createContext<WorkSchedulesContextType | null>(
  null
);

export const WorkScheduleProvider: FC<PropsWithChildren> = ({ children }) => {
  const { workSchedulePaginated, updateRequest, loading } = useWorkSchedules();
  const { deleteRecord } = useWorkScheduleAction();

  return (
    <WorkSchedulesContext.Provider
      value={{ workSchedulePaginated, updateRequest, loading, deleteRecord }}
    >
      {children}
    </WorkSchedulesContext.Provider>
  );
};

export const useWorkSchedulesContext = () => {
  const currentContext = useContext(WorkSchedulesContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
