import { getMessageError } from "@/utils/error.utils";
import { UserDtoPaginated, UserSearchRequest } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { useEffect, useRef, useState } from "react";
import { getNotification } from "@/contexts/feedback/FeedbackProvider";

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

  const [request, setRequest] = useState<UserSearchRequest>({
    pageNumber: userPaginated.currentPage,
    pageSize: userPaginated.pageSize,
    searchString: "",
  });

  const fetchPaginatedUsers = async (request: UserSearchRequest) => {
    try {
      setLoading(true);
      const data = await userApi.userSearch(request);
      setUserPaginated(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    fetchPaginatedUsers(request);
  }, [request]);

  // GET All USER
  // ==============

  const fetchUsers = async (ids: string[]) => {
    setLoading(true);
    try {
      return await userApi.userGetAll({ ids });
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    userPaginated,
    loading,
    fetchPaginatedUsers,
    request,
    setRequest,
    fetchUsers,
  };
};
