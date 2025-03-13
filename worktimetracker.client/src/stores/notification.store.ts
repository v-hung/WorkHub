import { create } from "zustand";

type NotificationStoreState = {
  unReadCount: number;
};

export const useNotificationStore = create<NotificationStoreState>((set) => ({
  unReadCount: 10,
}));
