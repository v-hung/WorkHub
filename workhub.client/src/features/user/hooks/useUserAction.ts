import { getNotification } from "@/common/contexts/FeedbackProvider";
import { getMessageError } from "@/common/utils/error.utils";
import { UserCreateUpdateRequest, UserDto, UserFullDto } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { useState } from "react";

export const useUserAction = () => {
  const [loading, setLoading] = useState(false);

  // Default data
  // =============

  const formDefault = (data?: UserFullDto): UserCreateUpdateRequest => {
    if (!data) {
      return new UserCreateUpdateRequest();
    }

    return {
      ...data,
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
      await userApi.userCreate(request);

      if (cb) cb();

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

  // Update USER
  // =============

  const updateUser = async (
    id: string,
    request: UserCreateUpdateRequest,
    cb?: (data: UserDto) => void
  ) => {
    setLoading(true);
    try {
      let data = await userApi.userUpdate(id, request);
      cb?.(data);

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

  // Delete USER
  // =============

  // const deleteUser = async (id: string, request: UserCreateUpdateRequest) => {
  //   setLoading(true);
  //   try {
  //     return await userApi.userDelete(id);
  //   } catch (e) {
  //     notification.error({
  //       message: getMessageError(e),
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return { loading, createUser, updateUser, formDefault };
};
