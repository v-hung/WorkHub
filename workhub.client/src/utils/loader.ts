import { LoaderFunction, redirect } from "react-router";
import { authBootstrap } from "../services/auth.bootstrap";
import { Permission } from "@/generate-api";
import { LoadResponse } from "@/stores/auth.store";

type AuthenticatedLoadResponse = Omit<LoadResponse, "user"> & {
  user: NonNullable<LoadResponse["user"]>;
};

export function wrapLoaderWithPermission<T extends LoaderFunction>(
  originalLoader?: (
    args: Parameters<T>[0],
    loadData: AuthenticatedLoadResponse
  ) => ReturnType<T>,
  permission?: Permission
): T {
  return (async (...args) => {
    const { user, permissions } = await authBootstrap.wait();
    const { request } = args[0];

    if (!user) {
      const redirectUrl =
        request.url != "/auth/login"
          ? "?redirectUrl=" + encodeURIComponent(new URL(request.url).pathname)
          : "";
      throw redirect(`/auth/login${redirectUrl}`);
    }

    if (permission && !permissions.includes(permission)) {
      throw redirect("/");
    }

    return originalLoader
      ? originalLoader(args[0], { user, permissions })
      : null;
  }) as T;
}

export function wrapLoader<T extends LoaderFunction>(
  originalLoader?: (
    args: Parameters<T>[0],
    loadData: LoadResponse
  ) => ReturnType<T>
): T {
  return (async (...args) => {
    const authData = await authBootstrap.wait();
    return originalLoader ? originalLoader(args[0], authData) : null;
  }) as T;
}
