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
import { DeviceCategoryDtoPaginated } from "@/generate-api";

type DeviceCategoriesContextType = {
  deviceCategoryPaginated: DeviceCategoryDtoPaginated;
  setRequest: Dispatch<
    SetStateAction<{
      pageNumber: number;
      pageSize: number;
      searchString: string;
    }>
  >;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const DeviceCategoriesContext =
  createContext<DeviceCategoriesContextType | null>(null);

export const DeviceCategoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const { deviceCategoryPaginated, setRequest, loading } =
    useDeviceCategories();
  const { deleteRecord } = useDeviceCategoryAction();

  return (
    <DeviceCategoriesContext.Provider
      value={{ deviceCategoryPaginated, setRequest, loading, deleteRecord }}
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
