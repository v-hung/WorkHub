import { Permission } from "@/generate-api";

type PermissionMap = Record<string, string[]>;

export const getGroupedPermissions = (): PermissionMap => {
  const map: PermissionMap = {};

  Object.values(Permission).forEach((perm) => {
    const [_, module, __] = perm.split(".");
    if (!map[module]) {
      map[module] = [];
    }
    map[module].push(perm); // giữ nguyên chuỗi gốc để dùng làm value
  });

  return map;
};

export type PermissionMatrix = Record<string, string[]>;

export const getPermissionMatrix = (): PermissionMatrix => {
  const matrix: PermissionMatrix = {};

  Object.values(Permission).forEach((perm) => {
    if (perm.startsWith("Permissions.")) {
      const [, group, action] = perm.split(".");
      if (!matrix[group]) matrix[group] = [];
      if (!matrix[group].includes(action)) matrix[group].push(action);
    }
  });

  // Optional: sort actions
  Object.keys(matrix).forEach((group) => {
    matrix[group].sort((a, b) => a.localeCompare(b));
  });

  return matrix;
};

// Convert back to Permission value
export const getPermissionValue = (group: string, action: string) =>
  `Permissions.${group}.${action}`;
