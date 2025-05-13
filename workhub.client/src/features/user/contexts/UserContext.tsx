import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useUsers } from "../hooks/useUsers";
import { useUserAction } from "../hooks/useUserAction";
import { UserDtoPaginated, PagedRequest } from "@/generate-api";

type UserContextType = {
  userPaginated: UserDtoPaginated;
  updateRequest: Dispatch<SetStateAction<PagedRequest>>;
  loading: boolean;
  deleteRecord: (id: string) => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userPaginated, updateRequest, loading } = useUsers();
  const { deleteRecord } = useUserAction();

  return (
    <UserContext.Provider
      value={{ userPaginated, updateRequest, loading, deleteRecord }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const currentContext = useContext(UserContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
