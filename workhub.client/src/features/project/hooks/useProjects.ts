import { getMessageError } from "@/utils/error.utils";
import { ProjectDtoPaginated } from "@/generate-api";
import { projectApi } from "@/services/apiClient";
import { App } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useProjects = () => {
  const mounted = useRef(false);
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

  const [request, setRequest] = useState({
    pageNumber: projectPaginated.currentPage,
    pageSize: projectPaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedProjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await projectApi.projectSearch(
        request.pageNumber,
        request.pageSize
      );
      setProjectPaginated(data);
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

    fetchPaginatedProjects();
  }, [request]);

  // GET All
  // ==============

  const fetchProjects = async (ids: number[]) => {
    setLoading(true);
    try {
      return await projectApi.projectGetAll(ids);
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
    projectPaginated,
    loading,
    fetchPaginatedProjects,
    request,
    setRequest,
    fetchProjects,
  };
};
