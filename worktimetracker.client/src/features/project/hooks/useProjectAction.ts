import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import { CreateProjectCommand, ProjectDto } from "@/generate-api";
import { projectApi } from "@/services/apiClient";
import { useState } from "react";

export const useProjectAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: ProjectDto): CreateProjectCommand => {
    if (!data) {
      return new CreateProjectCommand();
    }

    return {
      ...data,
      memberIds: data.members?.map((v) => v.id),
    };
  };

  // Create
  // =============

  const create = async (request: CreateProjectCommand) => {
    setLoading(true);
    try {
      await projectApi.projectCreate(request);
      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      // setLoading(false);
    }
  };

  // Update
  // =============

  const update = async (id: number, request: CreateProjectCommand) => {
    setLoading(true);
    try {
      await projectApi.projectUpdate(id, request);
      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      // setLoading(false);
    }
  };

  // Delete
  // =============

  const deleteRecord = async (id: number) => {
    setLoading(true);
    try {
      await projectApi.projectDelete(id);
      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, create, update, deleteRecord, formDefault };
};
