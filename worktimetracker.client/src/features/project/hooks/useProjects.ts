import { getMessageError } from "@/common/utils/error";
import { ProjectDto, ProjectDtoPaginated } from "@/generate-api";
import { projectApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useProjects = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);

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

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await projectApi.projectGetAll(
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

    fetchProjects();
  }, [request]);

  // GET project BY ID
  // ==============

  const [project, setProject] = useState<ProjectDto | null>();

  const fetchProject = async (id: number) => {
    setLoading(true);
    try {
      const data = await projectApi.projectGetById(id);
      setProject(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    projectPaginated,
    loading,
    fetchProjects,
    request,
    setRequest,
    project,
    fetchProject,
  };
};
