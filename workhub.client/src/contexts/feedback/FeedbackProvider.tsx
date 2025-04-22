import { showNotification } from "@/utils/notifications.utils";
import { App } from "antd";
import type { MessageInstance } from "antd/es/message/interface";
import type { ModalStaticFunctions } from "antd/es/modal/confirm";
import type { NotificationInstance } from "antd/es/notification/interface";
import { FC, PropsWithChildren, useEffect } from "react";

let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, "warn">;

export const setNotification = (
  noti: NotificationInstance,
  msg: MessageInstance,
  mdl: Omit<ModalStaticFunctions, "warn">
) => {
  notification = noti;
  message = msg;
  modal = mdl;
};

export const FeedbackProvider: FC<PropsWithChildren> = ({ children }) => {
  const { notification, message, modal } = App.useApp();

  useEffect(() => {
    setNotification(notification, message, modal);
  }, [notification, message, modal]);

  useEffect(() => {
    const bc = new BroadcastChannel("notification_channel");
    bc.onmessage = (event) => {
      if (event.data.type === "NOTIFICATION_CLICKED") {
        console.log("Notification clicked");
      }
    };
    return () => bc.close();
  }, []);

  return children;
};

export const getNotification = () => notification;
export const getMessage = () => message;
export const getModal = () => modal;

export const createInfoNotification = ({
  description,
  message,
}: {
  message: string;
  description?: string;
}) => {
  if (document.visibilityState === "visible") {
    getNotification().info({ message, description });
  } else {
    showNotification({ message, description });
  }
};
