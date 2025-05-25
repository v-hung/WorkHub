import { getMessageError } from "@/utils/error.utils";
import { DeviceDtoPaginated, PagedRequest } from "@/generate-api";
import { deviceApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useRef, useState } from "react";

export const useDevices = () => {
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST device
  // =============

  const [devicePaginated, setDevicePaginated] = useState<DeviceDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 25,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const request = useRef<PagedRequest>({
    pageNumber: devicePaginated.currentPage,
    pageSize: devicePaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedDevices = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await deviceApi.deviceSearch({ pagedRequest: request });
      setDevicePaginated(data);
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

      fetchPaginatedDevices(newRequest);
    },
    []
  );

  // GET All
  // ==============

  const fetchDevices = async (ids: number[]) => {
    setLoading(true);
    try {
      return await deviceApi.deviceGetAll({ ids });
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
    devicePaginated,
    loading,
    fetchPaginatedDevices,
    request,
    fetchDevices,
    updateRequest,
  };
};
