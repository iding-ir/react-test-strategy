export type NotificationMessageType = string;
export type NotificationCategoryType = "error" | "warning" | "info" | "success";

export type NotificationType = {
  message: NotificationMessageType;
  category: NotificationCategoryType;
};

export type NotificationsType = NotificationType[];
