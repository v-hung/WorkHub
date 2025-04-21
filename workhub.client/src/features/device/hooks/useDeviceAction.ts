import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import { CreateDeviceCommand, DeviceDto } from "@/generate-api";
import { deviceApi } from "@/services/apiClient";
import { useState } from "react";

export const useDeviceAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: DeviceDto): CreateDeviceCommand => {
    if (!data) {
      return new CreateDeviceCommand();
    }

    return {
      name: data.name,
      assignedUserId: data.assignedUser?.id || null,
      description: data.description,
      deviceCategoryIds: data.deviceCategories?.map((v) => v.id),
      location: data.location,
      status: data.status,
    };
  };

  // Create
  // =============

  const create = async (request: CreateDeviceCommand, cb?: () => void) => {
    setLoading(true);
    try {
      await deviceApi.deviceCreate(request);

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
    request: CreateDeviceCommand,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await deviceApi.deviceUpdate(id, request);

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
      await deviceApi.deviceDelete(id);
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
