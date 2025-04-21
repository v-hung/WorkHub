import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { CreateDeviceCategoryCommand, DeviceCategoryDto } from "@/generate-api";
import { deviceCategoryApi } from "@/services/apiClient";
import { useState } from "react";

export const useDeviceCategoryAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (
    data?: DeviceCategoryDto
  ): CreateDeviceCategoryCommand => {
    if (!data) {
      return new CreateDeviceCategoryCommand();
    }

    return {
      name: data.name,
      description: data.description,
      deviceIds: data.devices?.map((v) => v.id),
    };
  };

  // Create
  // =============

  const create = async (
    request: CreateDeviceCategoryCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await deviceCategoryApi.deviceCategoryCreate(request);

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

  // Update
  // =============

  const update = async (
    id: number,
    request: CreateDeviceCategoryCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await deviceCategoryApi.deviceCategoryUpdate(id, request);

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
      await deviceCategoryApi.deviceCategoryDelete(id);
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
