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
import { UserDtoPaginated } from "@/generate-api";

type UserContextType = {
  userPaginated: UserDtoPaginated;
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

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { userPaginated, setRequest, loading } = useUsers();
  const { deleteRecord } = useUserAction();

  return (
    <UserContext.Provider
      value={{ userPaginated, setRequest, loading, deleteRecord }}
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
