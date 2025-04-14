import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useTimesheets } from "../hooks/useTimesheets";
import { TimesheetDto } from "@/generate-api";

type TimesheetContextType = {
  timesheets: TimesheetDto[];
  loading: boolean;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  isCurrentMonth: boolean;
  getTimesheets: () => Promise<void>;
};

const TimesheetContext = createContext<TimesheetContextType | null>(null);

export const TimesheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    timesheets,
    loading,
    selectedDate,
    setSelectedDate,
    isCurrentMonth,
    getTimesheets,
  } = useTimesheets();

  return (
    <TimesheetContext.Provider
      value={{
        timesheets,
        loading,
        selectedDate,
        setSelectedDate,
        isCurrentMonth,
        getTimesheets,
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
