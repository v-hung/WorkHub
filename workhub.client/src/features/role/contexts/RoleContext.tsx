import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useRoles } from "../hooks/useRoles";
import { RoleDtoPaginated, PagedRequest } from "@/generate-api";
import { useRoleAction } from "../hooks/useRoleAction";

type RolesContextType = {
  rolePaginated: RoleDtoPaginated;
  updateRequest: (updater?: SetStateAction<PagedRequest>) => void;
  loading: boolean;
  deleteRecord: (id: string) => Promise<void>;
};

const RolesContext = createContext<RolesContextType | null>(null);

export const RoleProvider: FC<PropsWithChildren> = ({ children }) => {
  const { rolePaginated, updateRequest, loading } = useRoles();
  const { deleteRecord } = useRoleAction();

  return (
    <RolesContext.Provider
      value={{ rolePaginated, updateRequest, loading, deleteRecord }}
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
