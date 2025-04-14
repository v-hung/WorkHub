import { getMessageError } from "@/common/utils/error.utils";
import { RoleDtoPaginated } from "@/generate-api";
import { roleApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useRoles = () => {
  const mounted = useRef(false);
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

  const [request, setRequest] = useState({
    pageNumber: rolePaginated.currentPage,
    pageSize: rolePaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedRoles = useCallback(async () => {
    setLoading(true);
    try {
      const data = await roleApi.roleSearch(
        request.pageNumber,
        request.pageSize
      );
      setRolePaginated(data);
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

    fetchPaginatedRoles();
  }, [request]);

  // GET All
  // ==============

  const fetchRoles = async (ids: string[]) => {
    setLoading(true);
    try {
      return await roleApi.roleGetAllByNames(ids);
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
    rolePaginated,
    loading,
    fetchPaginatedRoles,
    request,
    setRequest,
    fetchRoles,
  };
};
