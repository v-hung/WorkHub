import { create } from "zustand";

type NotificationState = {
  unReadCount: number;
};

export const useNotificationStore = create<NotificationState>((set) => ({
  unReadCount: 10,
}));
