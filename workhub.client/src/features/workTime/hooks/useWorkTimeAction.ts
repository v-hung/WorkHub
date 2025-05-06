import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  CreateWorkTimeCommand,
  CreateWorkTimeCommandFromJSON,
  WorkTimeDto,
} from "@/generate-api";
import { workTimeApi } from "@/services/apiClient";
import { useState } from "react";

export const useWorkTimeAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: WorkTimeDto): CreateWorkTimeCommand => {
    if (!data) {
      return CreateWorkTimeCommandFromJSON({});
    }

    return data;
  };

  // Create
  // =============

  const create = async (request: CreateWorkTimeCommand, cb?: () => void) => {
    setLoading(true);
    try {
      await workTimeApi.workTimeCreate({ createWorkTimeCommand: request });

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
    request: CreateWorkTimeCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await workTimeApi.workTimeUpdate({ id, createWorkTimeCommand: request });

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
      await workTimeApi.workTimeDelete({ id });
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
