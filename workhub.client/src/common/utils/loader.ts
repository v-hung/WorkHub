import { LoaderFunction } from "react-router";
import { authBootstrap } from "../bootstrap/auth.bootstrap";
import { Permission } from "@/generate-api";
import { requiredPermission } from "./hasPermission";

export function wrapLoaderWithPermission<T extends LoaderFunction>(
  originalLoader?: (args: Parameters<T>[0], user: any) => ReturnType<T>,
  permission?: Permission
): T {
  return (async (...args) => {
    const user = await authBootstrap.wait();

    requiredPermission(args[0], permission);

    return originalLoader ? originalLoader(args[0], user) : null;
  }) as T;
}

export function wrapLoader<T extends LoaderFunction>(
  originalLoader?: (args: Parameters<T>[0], user: any) => ReturnType<T>
): T {
  return (async (...args) => {
    const user = await authBootstrap.wait();
    return originalLoader ? originalLoader(args[0], user) : null;
  }) as T;
}
