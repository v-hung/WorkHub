import { LoaderFunction } from "react-router";
import { authBootstrap } from "../bootstrap/auth.bootstrap";
import { Permission } from "@/generate-api";
import { requiredPermission } from "./hasPermission";

export function wrapLoaderWithPermission<T extends LoaderFunction>(
  originalLoader?: T,
  permission?: Permission
): T {
  return (async (...args) => {
    await authBootstrap.wait();

    requiredPermission(args[0], permission);

    return originalLoader ? originalLoader(...args) : null;
  }) as T;
}

export function wrapLoader<T extends LoaderFunction>(originalLoader?: T): T {
  return (async (...args) => {
    await authBootstrap.wait();
    return originalLoader ? originalLoader(...args) : null;
  }) as T;
}
