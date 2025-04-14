import { Permission } from "@/generate-api";
import { useAuthStore } from "@/stores/auth.store";
import { LoaderFunctionArgs, redirect } from "react-router";

export const hasPermission = (permission?: Permission) => {
  const { user, permissions } = useAuthStore.getState();

  if (!user) return false;

  if (permission) {
    return permissions.includes(permission);
  }

  return true;
};

export const requiredPermission = (
  args: LoaderFunctionArgs<any>,
  permission?: Permission
) => {
  const { user, permissions } = useAuthStore.getState();
  const { request } = args;

  if (!user && request.url != "/auth/login") {
    const redirectUrl = encodeURIComponent(new URL(request.url).pathname);
    throw redirect(`/auth/login?redirectUrl=${redirectUrl}`);
  }

  if (permission && !permissions.includes(permission)) {
    throw redirect("/");
  }
};
