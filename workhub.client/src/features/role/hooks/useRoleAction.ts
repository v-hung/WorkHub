import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error.utils";
import { RoleCreateUpdateRequest, RoleDto } from "@/generate-api";
import { roleApi } from "@/services/apiClient";
import { useState } from "react";

export const useRoleAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: RoleDto): RoleCreateUpdateRequest => {
    if (!data) {
      const form = new RoleCreateUpdateRequest();
      return {
        ...form,
      };
    }

    return {
      ...data,
    };
  };

  // Create
  // =============

  const create = async (request: RoleCreateUpdateRequest) => {
    setLoading(true);
    try {
      await roleApi.roleCreate(request);
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

  const update = async (id: string, request: RoleCreateUpdateRequest) => {
    setLoading(true);
    try {
      await roleApi.roleUpdate(id, request);
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

  const deleteRecord = async (id: string) => {
    setLoading(true);
    try {
      await roleApi.roleDelete(id);
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
