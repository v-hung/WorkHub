import { getMessageError } from "@/utils/error.utils";
import { PagedRequest, ProjectDtoPaginated } from "@/generate-api";
import { projectApi } from "@/services/apiClient";
import { App } from "antd";
import { SetStateAction, useCallback, useState } from "react";

export const useProjects = () => {
  const [loading, setLoading] = useState(false);
  const { notification } = App.useApp();

  // GET LIST project
  // =============

  const [projectPaginated, setProjectPaginated] = useState<ProjectDtoPaginated>(
    {
      data: [],
      currentPage: 1,
      pageSize: 25,
      totalCount: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    }
  );

  const [request, setRequest] = useState<PagedRequest>({
    pageNumber: projectPaginated.currentPage,
    pageSize: projectPaginated.pageSize,
    searchConditions: [],
  });

  const fetchPaginatedProjects = async (request: PagedRequest) => {
    setLoading(true);
    try {
      const data = await projectApi.projectSearch({ pagedRequest: request });
      setProjectPaginated(data);
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
      fetchPaginatedProjects(newRequest);
    },
    [request]
  );

  // GET All
  // ==============

  const fetchProjects = async (ids: number[]) => {
    setLoading(true);
    try {
      return await projectApi.projectGetAll({ ids });
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
    projectPaginated,
    loading,
    fetchPaginatedProjects,
    request,
    setRequest,
    fetchProjects,
    updateRequest,
  };
};
