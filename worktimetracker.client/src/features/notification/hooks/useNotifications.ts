import { getMessageError } from "@/common/utils/error";
import { NotificationDtoPaginated } from "@/generate-api";
import { notificationApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useNotifications = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST notification
  // =============

  const [notificationPaginated, setNotificationPaginated] =
    useState<NotificationDtoPaginated>({
      data: [],
      currentPage: 1,
      pageSize: 25,
      totalCount: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    });

  const [request, setRequest] = useState({
    pageNumber: notificationPaginated.currentPage,
    pageSize: notificationPaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedNotifications = useCallback(async () => {
    setLoading(true);
    try {
      const data = await notificationApi.notificationSearch(
        request.pageNumber,
        request.pageSize
      );
      setNotificationPaginated(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    fetchPaginatedNotifications();
  }, [request]);

  // GET All
  // ==============

  const fetchNotifications = async (ids: number[]) => {
    setLoading(true);
    try {
      return await notificationApi.notificationGetAll(ids);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    notificationPaginated,
    loading,
    fetchPaginatedNotifications,
    request,
    setRequest,
    fetchNotifications,
  };
};
