import { getMessageError } from "@/utils/error.utils";
import { DeviceDtoPaginated, DeviceSearchRequest } from "@/generate-api";
import { deviceApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useDevices = () => {
  const mounted = useRef(false);
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

  const [request, setRequest] = useState<DeviceSearchRequest>({
    pageNumber: devicePaginated.currentPage,
    pageSize: devicePaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedDevices = useCallback(async () => {
    setLoading(true);
    try {
      const data = await deviceApi.deviceSearch(request);
      setDevicePaginated(data);
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
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

    fetchPaginatedDevices();
  }, [request]);

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
    setRequest,
    fetchDevices,
  };
};
