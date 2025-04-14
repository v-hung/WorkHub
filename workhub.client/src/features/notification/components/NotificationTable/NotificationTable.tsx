import MainTable from "@/ui/table/MainTable";
import { useEffect, useMemo } from "react";
import { notificationTableColumns } from "./constants";
import { useNotifications } from "../../hooks/useNotifications";
import NotificationToolbar from "../NotificationToolbar/NotificationToolbar";

const NotificationTable = () => {
  const { notificationPaginated, loading, fetchPaginatedNotifications } =
    useNotifications();

  useEffect(() => {
    fetchPaginatedNotifications();
  }, []);

  const data = useMemo(
    () => notificationPaginated.data,
    [notificationPaginated.data]
  );

  return (
    <>
      <NotificationToolbar />
      <MainTable
        scroll={{ y: "auto" }}
        pagination={false}
        showHeader={false}
        columns={notificationTableColumns}
        dataSource={data}
        loading={loading}
      />
    </>
  );
};

export default NotificationTable;
