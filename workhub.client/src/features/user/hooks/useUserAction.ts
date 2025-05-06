import { getNotification } from "@/contexts/feedback/FeedbackProvider";
import { getMessageError } from "@/utils/error.utils";
import {
  BioStarSyncAllUsersResponse,
  UserCreateUpdateRequest,
  UserCreateUpdateRequestFromJSON,
  UserDto,
  UserFullDto,
} from "@/generate-api";
import { bioStarApi, userApi } from "@/services/apiClient";
import { useState } from "react";

export const useUserAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: UserFullDto): UserCreateUpdateRequest => {
    if (!data) {
      return UserCreateUpdateRequestFromJSON({});
    }

    return {
      ...data,
      fullName: data.fullName ?? "",
      workTimeId: data.workTime?.id,
      teamId: data.team?.id,
      supervisorId: data.supervisor?.id,
      managerTeamIds: data.managerTeams?.map((v) => v.id),
      roleNames: data.roles ?? [],
    };
  };

  // Create USER
  // =============

  const createUser = async (
    request: UserCreateUpdateRequest,
    cb?: () => void
  ) => {
    setLoading(true);
    try {
      await userApi.userCreate({ userCreateUpdateRequest: request });

      if (cb) cb();

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

  // Update USER
  // =============

  const updateUser = async (
    id: string,
    request: UserCreateUpdateRequest,
    cb?: (data: UserDto) => void
  ) => {
    setLoading(true);
    try {
      let data = await userApi.userUpdate({
        id,
        userCreateUpdateRequest: request,
      });
      cb?.(data);

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

  // Sync USER
  // =============

  const syncUsers = async (
    cb?: (data: BioStarSyncAllUsersResponse) => void
  ) => {
    setLoading(true);
    try {
      let data = await bioStarApi.bioStarSyncUsers();

      cb?.(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete USER
  // =============

  const deleteRecord = async (id: string) => {
    setLoading(true);
    try {
      return await userApi.userDelete({ id });
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createUser,
    updateUser,
    formDefault,
    syncUsers,
    deleteRecord,
  };
};
