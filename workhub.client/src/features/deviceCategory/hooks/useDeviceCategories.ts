import { getMessageError } from "@/utils/error.utils";
import { DeviceCategoryDtoPaginated, PagedRequest } from "@/generate-api";
import { deviceCategoryApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useRef, useState } from "react";

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

  const request = useRef<PagedRequest>({
    pageNumber: deviceCategoryPaginated.currentPage,
    pageSize: deviceCategoryPaginated.pageSize,
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
    (updater?: SetStateAction<PagedRequest>) => {
      let newRequest: PagedRequest;

      if (updater === undefined) {
        newRequest = request.current;
      } else {
        newRequest =
          typeof updater === "function" ? updater(request.current) : updater;

        request.current = newRequest;
      }

      fetchPaginatedDeviceCategories(newRequest);
    },
    []
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
    fetchDeviceCategories,
    updateRequest,
  };
};
