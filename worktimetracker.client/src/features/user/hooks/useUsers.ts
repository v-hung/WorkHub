import { getMessageError } from "@/common/utils/error";
import { UserDto, UserDtoPaginated } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useState } from "react";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);

  // GET LIST USER
  // =============

  const [users, setUsers] = useState<UserDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userApi.userGetAll(
        request.pageNumber,
        request.pageSize
      );
      setUsers(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  // GET USER BY ID
  // ==============

  const [user, setUser] = useState<UserDto | null>();

  const fetchUser = async (id: string) => {
    setLoading(true);
    try {
      const data = await userApi.userGetById(id);
      setUser(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, fetchUsers, setRequest, user, fetchUser };
};
