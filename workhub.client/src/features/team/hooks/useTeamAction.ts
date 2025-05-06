import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  CreateTeamCommand,
  CreateTeamCommandFromJSON,
  TeamFullDto,
} from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { useState } from "react";

export const useTeamAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: TeamFullDto): CreateTeamCommand => {
    if (!data) {
      return CreateTeamCommandFromJSON({});
    }

    return {
      ...data,
      managerId: data.manager?.id || null,
      memberIds: data.members?.map((v) => v.id),
      projectIds: data.projects?.map((v) => v.id),
    };
  };

  // Create
  // =============

  const create = async (request: CreateTeamCommand, cb?: () => void) => {
    setLoading(true);
    try {
      await teamApi.teamCreate({ createTeamCommand: request });

      cb?.();

      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      // setLoading(false);
    }
  };

  // Update
  // =============

  const update = async (
    id: number,
    request: CreateTeamCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await teamApi.teamUpdate({ id, createTeamCommand: request });

      cb?.();

      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
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
      await teamApi.teamDelete({ id });
      getNotification().success({
        message: "Successfully completed",
      });
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, create, update, deleteRecord, formDefault };
};
