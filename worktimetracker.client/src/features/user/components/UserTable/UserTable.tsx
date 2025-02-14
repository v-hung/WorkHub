import MainTable from "@/ui/table/MainTable";
import { DataUserTableType, userTableColumns } from "./constants";
import { useUsers } from "../../hooks/useUsers";
import { useEffect } from "react";
import { mapper } from "@/mappings";
import { UserDto } from "@/generate-api";

const UserTable = () => {
  const { users, loading, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <MainTable
      columns={userTableColumns}
      // dataSource={mapper.mapArray(users.data, UserDto, DataUserTableType)}
      loading={loading}
    />
  );
};

export default UserTable;
