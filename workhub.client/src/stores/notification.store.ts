import { notificationApi } from "@/services/apiClient";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type NotificationStoreState = {
  isFirstLoaded: boolean;
  unReadCount: number;
  load: () => Promise<void>;
};

export const useNotificationStore = create<NotificationStoreState>()(
  immer((set, get) => ({
    isFirstLoaded: false,
    unReadCount: 0,
    load: async () => {
      try {
        if (get().isFirstLoaded) {
          return;
        }

        const unReadCount = await notificationApi.notificationGetUnreadCount();
        set({ unReadCount, isFirstLoaded: true });
      } catch (error) {
        console.log(error);
      }
    },
  }))
);
