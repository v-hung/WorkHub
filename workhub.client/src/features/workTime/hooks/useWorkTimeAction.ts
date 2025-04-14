import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error.utils";
import { CreateWorkTimeCommand, WorkTimeDto } from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { useState } from "react";

export const useWorkTimeAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: WorkTimeDto): CreateWorkTimeCommand => {
    if (!data) {
      return new CreateWorkTimeCommand();
    }

    return data;
  };

  // Create
  // =============

  const create = async (request: CreateWorkTimeCommand) => {
    setLoading(true);
    try {
      await workTimeApi.workTimeCreate(request);
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

  const update = async (id: number, request: CreateWorkTimeCommand) => {
    setLoading(true);
    try {
      await workTimeApi.workTimeUpdate(id, request);
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
      await workTimeApi.workTimeDelete(id);
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
