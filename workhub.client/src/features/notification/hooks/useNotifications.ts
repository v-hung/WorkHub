import { getMessageError } from "@/common/utils/error.utils";
import { NotificationDtoCursorPaginated } from "@/generate-api";
import { notificationApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useNotifications = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  const [notificationCursorPaginated, setNotificationCursorPaginated] =
    useState<NotificationDtoCursorPaginated>({
      data: [],
      limit: 50,
      totalCount: 0,
      hasMore: true,
      lastId: undefined,
    });

  // Hướng phân trang: initial, next (trang sau), previous (trang trước)
  const fetchPaginatedNotifications = useCallback(
    async (direction: "initial" | "next" | "previous" = "initial") => {
      setLoading(true);
      try {
        const request = {
          lastId:
            direction === "initial"
              ? undefined
              : notificationCursorPaginated.lastId ?? undefined,
          cursorPagedRequestDirection:
            direction === "next"
              ? "Next"
              : direction === "previous"
              ? "Previous"
              : "Initial",
        };

        const data = await notificationApi.notificationSearch(request);
        setNotificationCursorPaginated(data);
      } catch (e) {
        notification.error({
          message: getMessageError(e),
        });
      } finally {
        setLoading(false);
      }
    },
    [notificationCursorPaginated]
  );

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      fetchPaginatedNotifications("initial");
    }
  }, []);

  return {
    notificationPaginated: notificationCursorPaginated,
    loading,
    fetchPaginatedNotifications,
  };
};
