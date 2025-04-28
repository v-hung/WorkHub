import { createInfoNotification } from "@/contexts/feedback/FeedbackProvider";
import { SystemNotificationMessageDto } from "@/types/signalr.notification";

export const onSystemNotification = (data: SystemNotificationMessageDto) => {
  createInfoNotification({
    message: data.Title,
    description: data.Body,
  });
};
