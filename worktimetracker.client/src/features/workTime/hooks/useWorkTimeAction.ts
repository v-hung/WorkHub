import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error";
import { CreateEditWorkTimeCommand } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { useState } from "react";

export const useWorkTimeAction = () => {
  const [loading, setLoading] = useState(false);

  // Create
  // =============

  const create = async (request: CreateEditWorkTimeCommand) => {
    setLoading(true);
    try {
      return await workTimeApi.workTimeCreate(request);
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  // Update
  // =============

  const update = async (id: string, request: CreateEditWorkTimeCommand) => {
    setLoading(true);
    try {
      return await workTimeApi.workTimeUpdate(id, request);
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
      await workTimeApi.workTimeDelete(id);
    } catch (e) {
      getNotification().error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, create, update, deleteRecord };
};
