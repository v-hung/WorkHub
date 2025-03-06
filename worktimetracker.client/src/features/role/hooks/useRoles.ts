import { getMessageError } from "@/common/utils/error";
import { RoleDto } from "@/generate-api";
import { roleApi } from "@/services/apiClient";
import { notification } from "antd";
import { useCallback, useState } from "react";

export const useRoles = () => {
  const [loading, setLoading] = useState(false);

  // GET LIST role
  // =============

  const [roles, setRoles] = useState<RoleDto[]>([]);

  const fetchRoles = useCallback(async () => {
    setLoading(true);
    try {
      const data = await roleApi.roleGetAll();
      setRoles(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // GET role BY ID
  // ==============

  const [role, setRole] = useState<RoleDto | null>();

  const fetchRole = async (id: string) => {
    setLoading(true);
    try {
      const data = await roleApi.roleGetById(id);
      setRole(data);
    } catch (e) {
      notification.error({
        message: getMessageError(e),
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    roles,
    loading,
    fetchRoles,
    role,
    fetchRole,
  };
};
