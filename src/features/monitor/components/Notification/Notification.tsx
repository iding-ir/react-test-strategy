import { NotificationType } from "../../type";

export const Notification = ({
  notification,
}: {
  notification: NotificationType;
}) => {
  const { message, category } = notification;

  return <li>{`${category}: ${message}`}</li>;
};
