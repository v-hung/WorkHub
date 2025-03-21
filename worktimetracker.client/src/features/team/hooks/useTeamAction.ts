import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import { CreateTeamCommand, TeamFullDto } from "@/generate-api";
import { teamApi } from "@/services/apiClient";
import { useState } from "react";

export const useTeamAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: TeamFullDto): CreateTeamCommand => {
    if (!data) {
      return new CreateTeamCommand();
    }

    return {
      ...data,
      memberIds: data.members?.map((v) => v.id),
      projectIds: data.projects?.map((v) => v.id),
    };
  };

  // Create
  // =============

  const create = async (request: CreateTeamCommand) => {
    setLoading(true);
    try {
      await teamApi.teamCreate(request);
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

  const update = async (id: number, request: CreateTeamCommand) => {
    setLoading(true);
    try {
      await teamApi.teamUpdate(id, request);
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
      await teamApi.teamDelete(id);
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
