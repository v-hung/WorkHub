import { getMessageError } from "@/common/utils/error";
import { WorkTimeDtoPaginated } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useWorkTimes = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST workTime
  // =============

  const [workTimePaginated, setWorkTimePaginated] =
    useState<WorkTimeDtoPaginated>({
      data: [],
      currentPage: 1,
      pageSize: 25,
      totalCount: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    });

  const [request, setRequest] = useState({
    pageNumber: workTimePaginated.currentPage,
    pageSize: workTimePaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedWorkTimes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await workTimeApi.workTimeSearch(
        request.pageNumber,
        request.pageSize
      );
      setWorkTimePaginated(data);
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

    fetchPaginatedWorkTimes();
  }, [request]);

  // GET All
  // ==============

  const fetchWorkTimes = async (ids: number[]) => {
    setLoading(true);
    try {
      return await workTimeApi.workTimeGetAll(ids);
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
    workTimePaginated,
    loading,
    fetchPaginatedWorkTimes,
    request,
    setRequest,
    fetchWorkTimes,
  };
};
