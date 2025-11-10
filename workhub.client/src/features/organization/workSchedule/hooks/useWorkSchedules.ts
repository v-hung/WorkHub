import { getMessageError } from "@/utils/error.utils";
import { WorkScheduleDtoPaginated, PagedRequest } from "@/generate-api";
import { workScheduleApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useRef, useState } from "react";

export const useWorkSchedules = () => {
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST workSchedule
  // =============

  const [workSchedulePaginated, setWorkSchedulePaginated] =
    useState<WorkScheduleDtoPaginated>({
      data: [],
      currentPage: 1,
      pageSize: 25,
      totalCount: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    });

  const request = useRef<PagedRequest>({
    pageNumber: workSchedulePaginated.currentPage,
    pageSize: workSchedulePaginated.pageSize,
  });

  const fetchPaginatedWorkSchedules = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await workScheduleApi.workScheduleSearch({
        pagedRequest: request,
      });
      setWorkSchedulePaginated(data);
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

      fetchPaginatedWorkSchedules(newRequest);
    },
    []
  );

  // GET All
  // ==============

  const fetchWorkSchedules = async (ids: number[]) => {
    setLoading(true);
    try {
      return await workScheduleApi.workScheduleGetAll({ ids });
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
    workSchedulePaginated,
    loading,
    fetchPaginatedWorkSchedules,
    request,
    fetchWorkSchedules,
    updateRequest,
  };
};
