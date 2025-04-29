import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useTimesheetAction } from "../hooks/useTimesheetAction";
import {
  BioStarSyncHistoricalEventsResponse,
  GetHistoricalEventsRequest,
} from "@/generate-api";

type TimesheetEmployeeContextType = {
  loading: boolean;
  syncTimesheet: (
    request: GetHistoricalEventsRequest,
    cb?: (data: BioStarSyncHistoricalEventsResponse) => void
  ) => Promise<void>;
};

const TimesheetEmployeeContext =
  createContext<TimesheetEmployeeContextType | null>(null);

export const TimesheetEmployeeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { loading, syncTimesheet } = useTimesheetAction();

  return (
    <TimesheetEmployeeContext.Provider value={{ loading, syncTimesheet }}>
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
