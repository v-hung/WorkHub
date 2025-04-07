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

    return menus.filter((menu) => {
      if (menu.permission) {
        if (!permissions.includes(menu.permission)) {
          return false;
        }
      }

      return true;
    });
  }, [t, unReadCount, permissions]);

  return { menuItems };
};
