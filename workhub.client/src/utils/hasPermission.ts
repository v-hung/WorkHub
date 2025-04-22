import { Permission } from "@/generate-api";
import { useAuthStore } from "@/stores/auth.store";
import { redirect } from "react-router";

export const hasPermission = (permission?: Permission) => {
  const { user, permissions } = useAuthStore.getState();

  if (!user) return false;

  if (permission) {
    return permissions.includes(permission);
  }

  return true;
};

export const ensurePermission = (
  permissions: Permission[],
  requiredPermission: Permission
) => {
  if (!permissions.includes(requiredPermission)) {
    throw redirect("/");
  }
};
