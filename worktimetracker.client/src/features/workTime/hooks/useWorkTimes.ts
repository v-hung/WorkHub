import { getMessageError } from "@/common/utils/error";
import { WorkTimeDto, WorkTimeDtoPaginated } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useState } from "react";

export const useWorkTimes = () => {
  const [loading, setLoading] = useState(false);

  // GET LIST workTime
  // =============

  const [workTimes, setWorkTimes] = useState<WorkTimeDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const fetchWorkTimes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await workTimeApi.workTimeGetAll(
        request.pageNumber,
        request.pageSize
      );
      setWorkTimes(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  // GET workTime BY ID
  // ==============

  const [workTime, setWorkTime] = useState<WorkTimeDto | null>();

  const fetchWorkTime = async (id: number) => {
    setLoading(true);
    try {
      const data = await workTimeApi.workTimeGetById(id);
      setWorkTime(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    workTimes,
    loading,
    fetchWorkTimes,
    setRequest,
    workTime,
    fetchWorkTime,
  };
};
