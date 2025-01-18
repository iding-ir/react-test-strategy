import clsx from "clsx";

import { NotificationType } from "../../type";

export const Notification = ({
  notification,
}: {
  notification: NotificationType;
}) => {
  const { message, category } = notification;

  const classNames = clsx("p-2 text-gray-50 rounded-md w-full", {
    "bg-notification-success": category === "success",
    "bg-notification-error": category === "error",
    "bg-notification-info": category === "info",
    "bg-notification-warning": category === "warning",
  });

  return (
    <li className={classNames}>
      <span>{message}</span>

      <span className="uppercase float-right">{category}</span>
    </li>
  );
};
