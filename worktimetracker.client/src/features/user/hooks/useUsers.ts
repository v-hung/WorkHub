import { getMessageError } from "@/common/utils/error";
import { UserDto, UserDtoPaginated } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export const useUsers = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);

  // GET LIST USER
  // =============

  const [userPaginated, setUserPaginated] = useState<UserDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 25,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState({
    pageNumber: userPaginated.currentPage,
    pageSize: userPaginated.pageSize,
    searchString: "",
  });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userApi.userGetAll(
        request.pageNumber,
        request.pageSize
      );
      setUserPaginated(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    fetchUsers();
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

  return {
    userPaginated,
    loading,
    fetchUsers,
    request,
    setRequest,
    user,
    fetchUser,
  };
};
