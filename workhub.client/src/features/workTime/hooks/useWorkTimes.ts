import { getMessageError } from "@/utils/error.utils";
import { WorkTimeDtoPaginated, WorkTimeSearchRequest } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useState } from "react";

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

  const [request, setRequest] = useState<WorkTimeSearchRequest>({
    pageNumber: workTimePaginated.currentPage,
    pageSize: workTimePaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedWorkTimes = async (request: WorkTimeSearchRequest) => {
    setLoading(true);
    try {
      const data = await workTimeApi.workTimeSearch(request);
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
    (updater: SetStateAction<WorkTimeSearchRequest>) => {
      const newRequest =
        typeof updater === "function" ? updater(request) : updater;

      setRequest(newRequest);
      fetchPaginatedWorkTimes(newRequest);
    },
    [request]
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
    setRequest,
    fetchWorkTimes,
    updateRequest,
  };
};
