import MainTable from "@/ui/table/MainTable";
import { userTableColumns } from "./constants";
import { useUsers } from "../../hooks/useUsers";
import { useEffect, useMemo } from "react";
import { toDataUserTable } from "@/mappings/user.mapping";

const UserTable = () => {
  const { users, loading, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const data = useMemo(() => users.data.map(toDataUserTable), [users]);

  return (
    <MainTable columns={userTableColumns} dataSource={data} loading={loading} />
  );
};

export default UserTable;
