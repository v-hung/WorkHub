import MainTable from "@/ui/table/MainTable";
import { useEffect, useMemo, useState } from "react";
import { notificationTableColumns } from "./constants";
import { useNotifications } from "../../hooks/useNotifications";
import NotificationToolbar from "../NotificationToolbar/NotificationToolbar";
import "./NotificationTable.css";
import { useNavigate } from "react-router";

const NotificationTable = () => {
  const navigate = useNavigate();
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
        className="notification-table"
        rowClassName={(record) =>
          `notification-table__row ${record.isRead ? "" : "unread"}`
        }
        onRow={(record) => ({
          onClick: () => {
            if (record.category == "REQUEST" && record.relatedEntityId) {
              navigate(`/requests/${record.relatedEntityId}`);
            }
          },
        })}
      />
    </>
  );
};

export default NotificationTable;
