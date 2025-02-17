import { PagedRequest, UserDtoPaginated } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { useCallback, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<UserDtoPaginated>({
    data: [],
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false,
  });

  const [request, setRequest] = useState<PagedRequest>({
    pageNumber: 1,
    pageSize: 10,
    searchString: "string",
  });
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userApi.apiUsersGet(request);
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }, [request]);

  return { users, loading, fetchUsers, setRequest };
};
