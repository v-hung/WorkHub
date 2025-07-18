import { getMessageError } from "@/utils/error.utils";
import { WorkTimeDtoPaginated, PagedRequest } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useRef, useState } from "react";

export const useWorkTimes = () => {
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

  const request = useRef<PagedRequest>({
    pageNumber: workTimePaginated.currentPage,
    pageSize: workTimePaginated.pageSize,
  });

  const fetchPaginatedWorkTimes = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await workTimeApi.workTimeSearch({ pagedRequest: request });
      setWorkTimePaginated(data);
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = useCallback(
    (updater?: SetStateAction<PagedRequest>) => {
      let newRequest: PagedRequest;

      if (updater === undefined) {
        newRequest = request.current;
      } else {
        newRequest =
          typeof updater === "function" ? updater(request.current) : updater;

        request.current = newRequest;
      }

      fetchPaginatedWorkTimes(newRequest);
    },
    []
  );

  // GET All
  // ==============

  const fetchWorkTimes = async (ids: number[]) => {
    setLoading(true);
    try {
      return await workTimeApi.workTimeGetAll({ ids });
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
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
    fetchWorkTimes,
    updateRequest,
  };
};
