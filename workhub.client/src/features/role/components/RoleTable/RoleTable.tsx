import MainTable from "@/ui/table/MainTable";
// import { useRoles } from "../../hooks/useRoles";
import { useEffect, useMemo } from "react";
import { roleTableColumns } from "./constants";
import { useRolesContext } from "../../contexts/RoleContext";

const RoleTable = () => {
  const { rolePaginated, setRequest, loading } = useRolesContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(() => rolePaginated.data, [rolePaginated.data]);

  return (
    <MainTable columns={roleTableColumns} dataSource={data} loading={loading} />
  );
};

export default RoleTable;
