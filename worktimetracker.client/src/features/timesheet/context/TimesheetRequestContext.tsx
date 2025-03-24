import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TimesheetRequestContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const TimesheetRequestContext =
  createContext<TimesheetRequestContextType | null>(null);

export const TimesheetRequestProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <TimesheetRequestContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </TimesheetRequestContext.Provider>
  );
};

export const useTimesheetRequestContext = () => {
  const currentContext = useContext(TimesheetRequestContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
