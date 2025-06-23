import { useEffect } from "react";
import { HubConnection } from "@microsoft/signalr";

import { onSystemNotification } from "./handlers/onSystemNotification";
import { onCheckInEvent } from "./handlers/onCheckInEvent";
import { onUnreadNotificationCount } from "./handlers/onUnreadNotificationCount";
import {
  BaseNotificationHubMessage,
  NotificationHubMessageType,
} from "@/types/signalr-notification";

export const useReceiveMessageHandler = (connection: HubConnection | null) => {
  useEffect(() => {
    if (!connection) return;

    connection.on(
      "ReceiveMessage",
      (notification: BaseNotificationHubMessage) => {
        console.log("Received notification: ", notification);

        switch (notification.type) {
          case NotificationHubMessageType.SystemNotification:
            onSystemNotification(notification.data);
            break;
          case NotificationHubMessageType.CheckInEvent:
            onCheckInEvent(notification.data);
            break;
          case NotificationHubMessageType.UnreadNotificationCount:
            onUnreadNotificationCount(notification.data);
            break;
        }
      }
    );

    return () => {
      connection?.off("ReceiveMessage");
    };
  }, [connection]);
};
