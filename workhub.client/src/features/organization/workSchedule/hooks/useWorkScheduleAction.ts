import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  CreateWorkScheduleCommand,
  CreateWorkScheduleCommandFromJSON,
  WorkScheduleDto,
} from "@/generate-api";
import { workScheduleApi } from "@/services/apiClient";
import { useState } from "react";

export const useWorkScheduleAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: WorkScheduleDto): CreateWorkScheduleCommand => {
    if (!data) {
      return CreateWorkScheduleCommandFromJSON({});
    }

    return data;
  };

  // Create
  // =============

  const create = async (
    request: CreateWorkScheduleCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await workScheduleApi.workScheduleCreate({
        createWorkScheduleCommand: request,
      });

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
    request: CreateWorkScheduleCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await workScheduleApi.workScheduleUpdate({
        id,
        createWorkScheduleCommand: request,
      });

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
      await workScheduleApi.workScheduleDelete({ id });
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
