import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useCurrentTimesheets } from "../hooks/useCurrentTimesheets";
import { TimesheetDto } from "@/generate-api";

type TimesheetContextType = {
  timesheets: TimesheetDto[];
  loading: boolean;
  selectedDate: Date;
  updateSelectedDate: Dispatch<SetStateAction<Date>>;
  isCurrentMonth: boolean;
  getCurrentTimesheets: (selectedDate: Date) => Promise<void>;
};

const TimesheetContext = createContext<TimesheetContextType | null>(null);

export const TimesheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    timesheets,
    loading,
    selectedDate,
    updateSelectedDate,
    isCurrentMonth,
    getCurrentTimesheets,
  } = useCurrentTimesheets();

  return (
    <TimesheetContext.Provider
      value={{
        timesheets,
        loading,
        selectedDate,
        updateSelectedDate,
        isCurrentMonth,
        getCurrentTimesheets,
      }}
    >
      {children}
    </TimesheetContext.Provider>
  );
};

export const useTimesheetContext = () => {
  const currentContext = useContext(TimesheetContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
