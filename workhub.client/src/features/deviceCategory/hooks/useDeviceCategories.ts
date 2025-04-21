import { getMessageError } from "@/utils/error.utils";
import { DeviceCategoryDtoPaginated } from "@/generate-api";
import { deviceCategoryApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useDeviceCategories = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST deviceCategory
  // =============

  const [deviceCategoryPaginated, setDeviceCategoryPaginated] =
    useState<DeviceCategoryDtoPaginated>({
      data: [],
      currentPage: 1,
      pageSize: 25,
      totalCount: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    });

  const [request, setRequest] = useState({
    pageNumber: deviceCategoryPaginated.currentPage,
    pageSize: deviceCategoryPaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedDeviceCategories = useCallback(async () => {
    setLoading(true);
    try {
      const data = await deviceCategoryApi.deviceCategorySearch(
        request.pageNumber,
        request.pageSize,
        request.searchString
      );
      setDeviceCategoryPaginated(data);
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

    fetchPaginatedDeviceCategories();
  }, [request]);

  // GET All
  // ==============

  const fetchDeviceCategories = async (ids: number[]) => {
    setLoading(true);
    try {
      return await deviceCategoryApi.deviceCategoryGetAll(ids);
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
    deviceCategoryPaginated,
    loading,
    fetchPaginatedDeviceCategories,
    request,
    setRequest,
    fetchDeviceCategories,
  };
};
