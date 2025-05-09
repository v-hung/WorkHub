import MainTable from "@/ui/table/MainTable";
import { userTableColumns } from "./constants";
import { useUsers } from "../../hooks/useUsers";
import { useEffect } from "react";

const UserTable = () => {
  const { userPaginated, setRequest, loading } = useUsers();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  return (
    <MainTable
      columns={userTableColumns}
      dataSource={userPaginated.data}
      loading={loading}
      pagination={{
        pageSize: userPaginated.pageSize,
        current: userPaginated.currentPage,
        total: userPaginated.totalCount,
        showSizeChanger: true,
        pageSizeOptions: ["25", "50", "100"],
        onChange: (page, pageSize) => {
          setRequest((r) => {
            if (r.pageNumber === page && r.pageSize === pageSize) return r;
            return { ...r, pageNumber: page, pageSize };
          });
        },
      }}
    />
  );
};

export default UserTable;
