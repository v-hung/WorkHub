import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useDevices } from "../hooks/useDevices";
import { useDeviceAction } from "../hooks/useDeviceAction";
import { DeviceDtoPaginated, DeviceSearchRequest } from "@/generate-api";

type DevicesContextType = {
  devicePaginated: DeviceDtoPaginated;
  setRequest: Dispatch<SetStateAction<DeviceSearchRequest>>;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const DevicesContext = createContext<DevicesContextType | null>(null);

export const DeviceProvider: FC<PropsWithChildren> = ({ children }) => {
  const { devicePaginated, setRequest, loading } = useDevices();
  const { deleteRecord } = useDeviceAction();

  return (
    <DevicesContext.Provider
      value={{ devicePaginated, setRequest, loading, deleteRecord }}
    >
      {children}
    </DevicesContext.Provider>
  );
};

export const useDevicesContext = () => {
  const currentContext = useContext(DevicesContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
