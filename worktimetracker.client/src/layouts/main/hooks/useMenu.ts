import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNotificationStore } from "@/stores/notification.store";
import { getMenuItems } from "../constants/menu";

export const useMenu = () => {
  const { t } = useTranslation();
  const unReadCount = useNotificationStore((state) => state.unReadCount);

  const menuItems = useMemo(() => {
    return getMenuItems(t, unReadCount);
  }, [t, unReadCount]);

  return { menuItems };
};
