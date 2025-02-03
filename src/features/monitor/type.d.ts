export type NotificationType = {
  message: string;
  category: "error" | "warning" | "info" | "success";
};

export type NotificationsType = NotificationType[];
