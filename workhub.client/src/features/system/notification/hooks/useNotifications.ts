import { getMessageError } from "@/utils/error.utils";
import {
  CursorPagedRequestDirection,
  NotificationDtoCursorPaginated,
} from "@/generate-api";
import { notificationApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useState } from "react";

export const useNotifications = () => {
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

  const fetchPaginatedNotifications = useCallback(
    async (direction?: CursorPagedRequestDirection) => {
      setLoading(true);
      try {
        const data = await notificationApi.notificationSearch({
          cursorPagedRequest: {
            cursorId: direction
              ? notificationCursorPaginated.lastId ?? undefined
              : undefined,
            cursorPagedRequestDirection: direction,
          },
        });
        setNotificationCursorPaginated(data);
      } catch (e) {
        notification.error({
          message: await getMessageError(e),
        });
      } finally {
        setLoading(false);
      }
    },
    [notificationCursorPaginated]
  );

  return {
    notificationPaginated: notificationCursorPaginated,
    loading,
    fetchPaginatedNotifications,
  };
};
