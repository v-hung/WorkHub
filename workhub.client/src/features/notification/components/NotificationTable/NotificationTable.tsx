import MainTable from "@/ui/table/MainTable";
import { useEffect, useMemo, useState } from "react";
import { notificationTableColumns } from "./constants";
import { useNotifications } from "../../hooks/useNotifications";
import NotificationToolbar from "../NotificationToolbar/NotificationToolbar";

const NotificationTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

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
      <NotificationToolbar
        style={{ paddingLeft: 0 }}
        selected={selectedRowKeys}
        onCheckAllChange={(checked) => {
          if (checked) {
            const allKeys = data.map((item) => item.id);
            setSelectedRowKeys(allKeys);
          } else {
            setSelectedRowKeys([]);
          }
        }}
        isCheckAll={selectedRowKeys.length === data.length && data.length > 0}
      />

      <MainTable
        scroll={{ y: "auto" }}
        pagination={false}
        showHeader={false}
        columns={notificationTableColumns}
        dataSource={data}
        loading={loading}
        rowSelection={{
          selectedRowKeys,
          onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
          },
        }}
      />
    </>
  );
};

export default NotificationTable;
