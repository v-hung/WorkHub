import { createContext, FC, PropsWithChildren, useContext } from "react";

type TimesheetEmployeeContextType = {};

const TimesheetEmployeeContext =
  createContext<TimesheetEmployeeContextType | null>(null);

export const TimesheetEmployeeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <TimesheetEmployeeContext.Provider value={{}}>
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
