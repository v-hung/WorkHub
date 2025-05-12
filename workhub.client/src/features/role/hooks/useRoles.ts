import { getMessageError } from "@/utils/error.utils";
import { RoleDtoPaginated, RoleSearchRequest } from "@/generate-api";
import { roleApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useState } from "react";

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

  const [request, setRequest] = useState<RoleSearchRequest>({
    pageNumber: rolePaginated.currentPage,
    pageSize: rolePaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedRoles = async (request: RoleSearchRequest) => {
    setLoading(true);
    try {
      const data = await roleApi.roleSearch(request);
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
    (updater: SetStateAction<RoleSearchRequest>) => {
      const newRequest =
        typeof updater === "function" ? updater(request) : updater;

      setRequest(newRequest);
      fetchPaginatedRoles(newRequest);
    },
    [request]
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
    setRequest,
    fetchRoles,
    updateRequest,
  };
};
