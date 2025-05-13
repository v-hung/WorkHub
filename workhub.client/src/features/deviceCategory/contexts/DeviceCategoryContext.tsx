import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useDeviceCategories } from "../hooks/useDeviceCategories";
import { useDeviceCategoryAction } from "../hooks/useDeviceCategoryAction";
import { DeviceCategoryDtoPaginated, PagedRequest } from "@/generate-api";

type DeviceCategoriesContextType = {
  deviceCategoryPaginated: DeviceCategoryDtoPaginated;
  updateRequest: Dispatch<SetStateAction<PagedRequest>>;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const DeviceCategoriesContext =
  createContext<DeviceCategoriesContextType | null>(null);

export const DeviceCategoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const { deviceCategoryPaginated, updateRequest, loading } =
    useDeviceCategories();
  const { deleteRecord } = useDeviceCategoryAction();

  return (
    <DeviceCategoriesContext.Provider
      value={{ deviceCategoryPaginated, updateRequest, loading, deleteRecord }}
    >
      {children}
    </DeviceCategoriesContext.Provider>
  );
};

export const useDeviceCategoriesContext = () => {
  const currentContext = useContext(DeviceCategoriesContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
