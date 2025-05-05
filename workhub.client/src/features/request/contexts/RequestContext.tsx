import { RequestType } from "@/generate-api";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

type RequestContextType = {
  isOpen: (type: RequestType) => boolean;
  requestType: RequestType;
  date: Date | undefined;
  openRequest: (type: RequestType, date?: Date | undefined) => void;
  closeRequest: () => void;
};

const RequestContext = createContext<RequestContextType | null>(null);

export const RequestProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [requestType, setRequestType] = useState<RequestType>(
    RequestType.LeaveRequest
  );

  const openRequest = (
    type: RequestType,
    date: Date | undefined = undefined
  ) => {
    setRequestType(type);
    setOpen(true);
    setDate(date);
  };

  const closeRequest = () => setOpen(false);

  const isOpen = useCallback(
    (type: RequestType) => open && requestType === type,
    [open, requestType]
  );

  return (
    <RequestContext.Provider
      value={{ isOpen, requestType, openRequest, closeRequest, date }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestContext = () => {
  const currentContext = useContext(RequestContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
