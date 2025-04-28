import { useNotificationStore } from "@/stores/notification.store";
import { UnreadNotificationCountMessageDto } from "@/types/signalr.notification";

export const onUnreadNotificationCount = (
  data: UnreadNotificationCountMessageDto
) => {
  useNotificationStore.setState({ unReadCount: data.count });
};
