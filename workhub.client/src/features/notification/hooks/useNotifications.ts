import { getMessageError } from "@/common/utils/error.utils";
import { NotificationDtoCursorPaginated } from "@/generate-api";
import { notificationApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useNotifications = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST notification
  // =============

  const [notificationCursorPaginated, setNotificationCursorPaginated] =
    useState<NotificationDtoCursorPaginated>({
      data: [],
      limit: 50,
      totalCount: 0,
      hasMore: true,
      lastId: undefined,
    });

  const fetchPaginatedNotifications = useCallback(async () => {
    setLoading(true);
    try {
      const data = await notificationApi.notificationSearch(
        notificationCursorPaginated.lastId ?? undefined
      );
      setNotificationCursorPaginated(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [notificationCursorPaginated]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    fetchPaginatedNotifications();
  }, []);

  return {
    notificationPaginated: notificationCursorPaginated,
    loading,
    fetchPaginatedNotifications,
  };
};
