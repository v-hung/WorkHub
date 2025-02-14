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

export const requiredPermission = (permission?: Permission) => {
  const { user, permissions } = useAuthStore.getState();

  if (!user) {
    throw redirect("/auth/login");
  }

  if (permission && !permissions.includes(permission)) {
    throw redirect("/");
  }
};
