import { getMessageError } from "@/utils/error.utils";
import {
  UserDtoPaginated,
  PagedRequest,
  SearchOperator,
  UserStatus,
} from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { SetStateAction, useCallback, useState } from "react";
import { getNotification } from "@/contexts/feedback/FeedbackProvider";

export const useUsers = () => {
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

  const [request, setRequest] = useState<PagedRequest>({
    pageNumber: userPaginated.currentPage,
    pageSize: userPaginated.pageSize,
    searchConditions: [
      {
        column: "userStatus",
        operator: SearchOperator.Contains,
        values: [UserStatus.Active, UserStatus.Onsite],
      },
    ],
    orderBy: "createdAt ascending",
  });

  const fetchPaginatedUsers = async (request: PagedRequest) => {
    try {
      setLoading(true);
      const data = await userApi.userSearch({ pagedRequest: request });
      setUserPaginated(data);
    } catch (e) {
      getNotification().error({
        message: await getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = useCallback(
    (updater: SetStateAction<PagedRequest>) => {
      const newRequest =
        typeof updater === "function" ? updater(request) : updater;

      setRequest(newRequest);
      fetchPaginatedUsers(newRequest);
    },
    [request]
  );

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
    updateRequest,
  };
};
