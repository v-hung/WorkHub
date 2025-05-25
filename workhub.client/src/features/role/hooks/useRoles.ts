import { getMessageError } from "@/utils/error.utils";
import { RoleDtoPaginated, PagedRequest } from "@/generate-api";
import { roleApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useRef, useState } from "react";

export const useRoles = () => {
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST role
  // =============

  const [rolePaginated, setRolePaginated] = useState<RoleDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 25,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const request = useRef<PagedRequest>({
    pageNumber: rolePaginated.currentPage,
    pageSize: rolePaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedRoles = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await roleApi.roleSearch({ pagedRequest: request });
      setRolePaginated(data);
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

      fetchPaginatedRoles(newRequest);
    },
    []
  );

  // GET All
  // ==============

  const fetchRoles = async (names: string[]) => {
    setLoading(true);
    try {
      return await roleApi.roleGetAllByNames({ names: names });
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
    rolePaginated,
    loading,
    fetchPaginatedRoles,
    request,
    fetchRoles,
    updateRequest,
  };
};
