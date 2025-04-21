import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { CreateProjectCommand, ProjectDto } from "@/generate-api";
import { projectApi } from "@/services/apiClient";
import { useState } from "react";

export type CreateProjectCommandCustomType = CreateProjectCommand & {
  completionTime: [Date | null, Date | null];
};

export const useProjectAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: ProjectDto): CreateProjectCommandCustomType => {
    if (!data) {
      const form = new CreateProjectCommand();
      return {
        ...form,
        completionTime: [null, null],
      };
    }

    return {
      ...data,
      managerId: data.manager?.id || null,
      teamId: data.team?.id || null,
      memberIds: data.members?.map((v) => v.id),
      completionTime: [data.startDate || null, data.endDate || null],
    };
  };

  // Create
  // =============

  const create = async (request: CreateProjectCommand, cb?: () => void) => {
    setLoading(true);
    try {
      await projectApi.projectCreate(request);

      cb?.();

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

  const update = async (
    id: number,
    request: CreateProjectCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await projectApi.projectUpdate(id, request);

      cb?.();

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
