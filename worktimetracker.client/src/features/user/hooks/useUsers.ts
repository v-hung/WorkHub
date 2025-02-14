import { UserDtoPaginated } from "@/generate-api";
import { userApi } from "@/services/apiClient";
import { useCallback, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<UserDtoPaginated>(new UserDtoPaginated());
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userApi.apiUsersGet();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, fetchUsers };
};
