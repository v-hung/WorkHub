export const requestNotificationPermission =
  async (): Promise<NotificationPermission> => {
    if (!("Notification" in window)) {
      console.warn("The browser does not support Notification API");
      return "denied";
    }

    const permission = await Notification.requestPermission();
    return permission;
  };

export const showNotification = async ({
  description,
  message,
}: {
  message: string;
  description?: string;
}) => {
  if (Notification.permission === "denied") {
    return console.warn("User has declined notification!");
  }
  if (Notification.permission !== "granted") {
    await requestNotificationPermission();
  }

  const notification = new Notification(message, {
    body: description,
    icon: "/logo.png",
  });

  notification.onclick = () => {
    const bc = new BroadcastChannel("notification_channel");
    bc.postMessage({ type: "NOTIFICATION_CLICKED", payload: {} });
    window.focus();
  };
};
