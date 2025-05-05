import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  RoleCreateUpdateRequest,
  RoleCreateUpdateRequestFromJSON,
  RoleDto,
} from "@/generate-api";
import { roleApi } from "@/services/apiClient";
import { useState } from "react";

export const useRoleAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: RoleDto): RoleCreateUpdateRequest => {
    if (!data) {
      const form = RoleCreateUpdateRequestFromJSON({});
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

  const create = async (request: RoleCreateUpdateRequest, cb?: () => void) => {
    setLoading(true);
    try {
      await roleApi.roleCreate({ roleCreateUpdateRequest: request });

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
    id: string,
    request: RoleCreateUpdateRequest,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await roleApi.roleUpdate({ id, roleCreateUpdateRequest: request });

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

  const deleteRecord = async (id: string) => {
    setLoading(true);
    try {
      await roleApi.roleDelete({ id });
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
