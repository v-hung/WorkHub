import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useRoles } from "../hooks/useRoles";
import { RoleDtoPaginated } from "@/generate-api";
import { useRoleAction } from "../hooks/useRoleAction";

type RolesContextType = {
  rolePaginated: RoleDtoPaginated;
  setRequest: Dispatch<
    SetStateAction<{
      pageNumber: number;
      pageSize: number;
      searchString: string;
    }>
  >;
  loading: boolean;
  deleteRecord: (id: string) => Promise<void>;
};

const RolesContext = createContext<RolesContextType | null>(null);

export const RoleProvider: FC<PropsWithChildren> = ({ children }) => {
  const { rolePaginated, setRequest, loading } = useRoles();
  const { deleteRecord } = useRoleAction();

  return (
    <RolesContext.Provider
      value={{ rolePaginated, setRequest, loading, deleteRecord }}
    >
      {children}
    </RolesContext.Provider>
  );
};

export const useRolesContext = () => {
  const currentContext = useContext(RolesContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
