import { LoaderFunction, redirect } from "react-router";
import { Permission } from "@/generate-api";
import { LoadResponse, useAuthStore } from "@/stores/auth.store";
import i18n from "../hooks/locale/i18n";
import { localeManager } from "@/hooks/locale/localeManager";

type AuthenticatedLoadResponse = Omit<LoadResponse, "user"> & {
  user: NonNullable<LoadResponse["user"]>;
};

export function wrapProtectedLoader<T extends LoaderFunction>(
  originalLoader?: (
    args: Parameters<T>[0],
    loadData: AuthenticatedLoadResponse
  ) => ReturnType<T>,
  permission?: Permission
): T {
  return (async (...args) => {
    if (!i18n.isInitialized) {
      await i18n.init();
    }

    if (!localeManager.isInitialized) {
      await localeManager.init();
    }

    const { user, permissions } = await useAuthStore.getState().load();
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

export function wrapAuthLoader<T extends LoaderFunction>(
  originalLoader?: (
    args: Parameters<T>[0],
    loadData: LoadResponse
  ) => ReturnType<T>
): T {
  return (async (...args) => {
    if (!i18n.isInitialized) {
      await i18n.init();
    }

    if (!localeManager.isInitialized) {
      await localeManager.init();
    }

    const authData = await useAuthStore.getState().load();
    return originalLoader ? originalLoader(args[0], authData) : null;
  }) as T;
}

export function wrapLoader<T extends LoaderFunction>(
  originalLoader?: (args: Parameters<T>[0]) => ReturnType<T>
): T {
  return (async (...args) => {
    if (!i18n.isInitialized) {
      await i18n.init();
    }

    if (!localeManager.isInitialized) {
      await localeManager.init();
    }

    return originalLoader ? originalLoader(args[0]) : null;
  }) as T;
}
