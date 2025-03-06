import MainTable from "@/ui/table/MainTable";
import { userTableColumns } from "./constants";
import { useUsers } from "../../hooks/useUsers";
import { useEffect, useMemo } from "react";
import { toDataUserTable } from "@/mappings/user.mapping";

const UserTable = () => {
  const { userPaginated, setRequest, loading } = useUsers();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(
    () => userPaginated.data.map(toDataUserTable),
    [userPaginated.data]
  );

  return (
    <MainTable columns={userTableColumns} dataSource={data} loading={loading} />
  );
};

export default UserTable;
