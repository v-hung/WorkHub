import { getMessageError } from "@/common/utils/error";
import { WorkTimeDto, WorkTimeDtoPaginated } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useWorkTimes = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);

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

  const fetchWorkTimes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await workTimeApi.workTimeGetAll(
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

    fetchWorkTimes();
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
    workTimePaginated,
    loading,
    fetchWorkTimes,
    request,
    setRequest,
    workTime,
    fetchWorkTime,
  };
};
