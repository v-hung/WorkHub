import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNotificationStore } from "@/stores/notification.store";
import { getMenuItems } from "../constants/menu";
import { useAuthStore } from "@/stores/auth.store";

export const useMenu = () => {
  const { t } = useTranslation();
  const unReadCount = useNotificationStore((state) => state.unReadCount);
  const permissions = useAuthStore((state) => state.permissions);

  const menuItems = useMemo(() => {
    const menus = getMenuItems(t, unReadCount) ?? [];

    const filterByPermission = (items: typeof menus): typeof menus => {
      return items
        .map((menu) => {
          if (Array.isArray(menu.children)) {
            const filteredChildren = filterByPermission(menu.children);

            if (
              filteredChildren.length === 0 ||
              (menu.permission && !permissions.includes(menu.permission))
            ) {
              return null;
            }

            return {
              ...menu,
              children: filteredChildren,
            };
          }

          if (menu.permission && !permissions.includes(menu.permission)) {
            return null;
          }

          return menu;
        })
        .filter((menu): menu is NonNullable<typeof menu> => menu !== null)
        .filter((menu, index, arr) => {
          if (
            menu.type == "group" &&
            (index == arr.length - 1 ||
              (index < arr.length - 1 && arr[index + 1].type == "group"))
          ) {
            return false;
          }
          return true;
        });
    };

    return filterByPermission(menus);
  }, [t, unReadCount, permissions]);

  return { menuItems };
};
