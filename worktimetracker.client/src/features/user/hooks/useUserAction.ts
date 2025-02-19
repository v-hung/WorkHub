import { getMessageError } from "@/common/utils/error";
import { UserCreateUpdateRequest } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { notification } from "antd";
import { useState } from "react";

export const useUserAction = () => {
  const [loading, setLoading] = useState(false);

  // Create USER
  // =============

  const createUser = async (request: UserCreateUpdateRequest) => {
    setLoading(true);
    try {
      return await userApi.userCreate(request);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  // Update USER
  // =============

  const updateUser = async (id: string, request: UserCreateUpdateRequest) => {
    setLoading(true);
    try {
      return await userApi.userUpdate(id, request);
    } catch (e) {
      notification.error({
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

  return { loading, createUser, updateUser };
};
