import { getMessageError } from "@/common/utils/error";
import { ProjectDto, ProjectDtoPaginated } from "@/generate-api";
import { projectApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useState } from "react";

export const useProjects = () => {
  const [loading, setLoading] = useState(false);

  // GET LIST project
  // =============

  const [projects, setProjects] = useState<ProjectDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await projectApi.projectGetAll(
        request.pageNumber,
        request.pageSize
      );
      setProjects(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
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
    projects,
    loading,
    fetchProjects,
    setRequest,
    project,
    fetchProject,
  };
};
