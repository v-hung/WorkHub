import { getMessageError } from "@/utils/error.utils";
import { DeviceCategoryDtoPaginated, PagedRequest } from "@/generate-api";
import { deviceCategoryApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useState } from "react";

export const useDeviceCategories = () => {
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

  const [request, setRequest] = useState<PagedRequest>({
    pageNumber: deviceCategoryPaginated.currentPage,
    pageSize: deviceCategoryPaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedDeviceCategories = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await deviceCategoryApi.deviceCategorySearch({
        pagedRequest: request,
      });
      setDeviceCategoryPaginated(data);
    } catch (e) {
      notification.error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = useCallback(
    (updater: SetStateAction<PagedRequest>) => {
      const newRequest =
        typeof updater === "function" ? updater(request) : updater;

      setRequest(newRequest);
      fetchPaginatedDeviceCategories(newRequest);
    },
    [request]
  );

  // GET All
  // ==============

  const fetchDeviceCategories = async (ids: number[]) => {
    setLoading(true);
    try {
      return await deviceCategoryApi.deviceCategoryGetAll({ ids });
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
    deviceCategoryPaginated,
    loading,
    fetchPaginatedDeviceCategories,
    request,
    setRequest,
    fetchDeviceCategories,
    updateRequest,
  };
};
