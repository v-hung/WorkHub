import { notificationApi } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type NotificationStoreState = {
  unReadCount: number;
  load: () => Promise<void>;
};

export const useNotificationStore = create<NotificationStoreState>()(
  immer((set) => ({
    unReadCount: 0,
    load: async () => {
      try {
        const unReadCount = await notificationApi.notificationGetUnreadCount();
        set({ unReadCount });
      } catch (error) {
        console.log(error);
      }
    },
  }))
);
