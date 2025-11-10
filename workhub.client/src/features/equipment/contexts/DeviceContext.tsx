import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useDevices } from "../hooks/useDevices";
import { useDeviceAction } from "../hooks/useDeviceAction";
import { DeviceDtoPaginated, PagedRequest } from "@/generate-api";

type DevicesContextType = {
  devicePaginated: DeviceDtoPaginated;
  updateRequest: (updater?: SetStateAction<PagedRequest>) => void;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const DevicesContext = createContext<DevicesContextType | null>(null);

export const DeviceProvider: FC<PropsWithChildren> = ({ children }) => {
  const { devicePaginated, updateRequest, loading } = useDevices();
  const { deleteRecord } = useDeviceAction();

  return (
    <DevicesContext.Provider
      value={{ devicePaginated, updateRequest, loading, deleteRecord }}
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
