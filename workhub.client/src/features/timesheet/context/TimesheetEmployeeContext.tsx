import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import {
  BioStarSyncHistoricalEventsResponse,
  GetHistoricalEventsRequest,
  TimesheetFullDtoPaginated,
} from "@/generate-api";
import {
  GetMonthlyTimesheetRequest,
  useTimesheets,
} from "../hooks/useTimesheets";

type TimesheetEmployeeContextType = {
  loading: boolean;
  syncTimesheet: (
    request: GetHistoricalEventsRequest,
    cb?: (data: BioStarSyncHistoricalEventsResponse) => void
  ) => Promise<void>;
  request: GetMonthlyTimesheetRequest;
  timesheetPaginated: TimesheetFullDtoPaginated | undefined;
  updateRequest: (updater?: SetStateAction<GetMonthlyTimesheetRequest>) => void;
  isCurrentMonth: boolean;
};

const TimesheetEmployeeContext =
  createContext<TimesheetEmployeeContextType | null>(null);

export const TimesheetEmployeeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const {
    request,
    timesheetPaginated,
    updateRequest,
    isCurrentMonth,
    loading,
    syncTimesheet,
  } = useTimesheets();

  return (
    <TimesheetEmployeeContext.Provider
      value={{
        request,
        timesheetPaginated,
        updateRequest,
        isCurrentMonth,
        loading,
        syncTimesheet,
      }}
    >
      {children}
    </TimesheetEmployeeContext.Provider>
  );
};

export const useTimesheetEmployeeContext = () => {
  const currentContext = useContext(TimesheetEmployeeContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
