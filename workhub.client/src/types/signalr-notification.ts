export type BaseNotificationHubMessage =
  | {
      type: NotificationHubMessageType.SystemNotification;
      data: SystemNotificationMessageDto;
    }
  | {
      type: NotificationHubMessageType.UnreadNotificationCount;
      data: UnreadNotificationCountMessageDto;
    }
  | {
      type: NotificationHubMessageType.CheckInEvent;
      data: CheckInEventMessageDto;
    };

export enum NotificationHubMessageType {
  SystemNotification,
  CheckInEvent,
  UnreadNotificationCount,
}

// SystemNotificationMessage
export type SystemNotificationMessageDto = {
  Title: string;
  Body: string;
  Severity: SystemNotificationMessageSeverity;
};

export enum SystemNotificationMessageSeverity {
  Info,
  Warning,
  Error,
}

// CheckInEventMessage
export type CheckInEventMessageDto = {
  userId: string;
  checkInTime: Date;
  location?: string;
};

// UnreadNotificationCountMessage
export type UnreadNotificationCountMessageDto = {
  count: number;
};
